/**
 * @class MyApp.abstract.data.Connection
 * @extends Ext.data.Connection
 * @author Crysfel Villa <crysfel@bleext.com>
 *
 * Description
 */

Ext.define('MyApp.abstract.data.Connection',{
    extend      : 'Ext.data.Connection',

    request     : function(options){
        options.originalCallbacks = {
            scope   : options.scope || this,
            success : options.success || Ext.emptyFn,
            failure : options.failure || Ext.emptyFn
        };

        options.scope = this;
        options.success = this.successCallback;
        options.failure = this.failureCallback;

        this.callParent([options]);
    },

    successCallback : function(response,options){
        var info;
        try{
            info = Ext.decode(response.responseText);    
        }catch(e){
            info = {control:{success:false}};
        }
        

        if(info.control.success){
            options.originalCallbacks.success.call(options.originalCallbacks.scope,info);
        }else{
            this.failureCallback(response,options);
        }
    },

    failureCallback : function(response,options){
        var info,error;
        try{
            info = Ext.decode(response.responseText);
        }catch(e){
            info = {control:{success:false}};
        }
        

        if(info.control.errors){
            for(var i=0,len=info.control.errors.length;i<len;i++){
                error = info.control.errors[i];

                if(error.code === 401){
                    this.fireEvent('sessionexpired',error);
                }else{
                    this.fireEvent('ajaxerror',error);
                }
                               
            }
        }else{
            error = {};
            switch(response.status){
                case 0   : error.message = 'Verifica tu conexión, es posible que este fallando.';
                        break;
                case 401 : error.message = 'Tu sesión ha expirado.';
                      this.fireEvent('sessionexpired',error);
                      break;
                case 403 : error.message = 'No tienes permisos para acceder este recurso.';
                      break;
                case 404 : error.message = 'Recurso no encontrado';
                      break;
                case 500 : error.message = 'Error en el servidor';
                      break;
                default : error.message = response.statusText;
            }
            this.fireEvent('ajaxerror',error);
        }

        options.originalCallbacks.failure.call(options.originalCallbacks.scope,error);
    }
});

MyApp.Ajax = Ext.create('MyApp.abstract.data.Connection');