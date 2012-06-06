/**
 * @class MyApp.data.Cliente
 * @extends MyApp.data.Usuario
 * @author Crysfel Villa <crysfel@bleext.com>
 *
 * Description
 */

Ext.define('MyApp.data.Cliente',{
    extend      : 'MyApp.data.Usuario',
    
    mixins      : {
        observable : 'Ext.util.Observable'
    },

    config : {
        rfc     : '',
        calle   : '',
        colonia : '',
        ciudad  : '',
        estado  : '',
        pais    : ''
    },

    constructor : function(options){
        console.log('Constructor en la subclase!');

        this.addEvents({
            'success' : true,
            'failure' : true
        });

        this.callParent([options]);
        this.mixins.observable.constructor.call(this);
    },

    login       : function(item){
        var me = this;
        console.log('Login: Dentro de la subclase');

        this.callParent(arguments);

        setTimeout(function(){
            me.fireEvent('success',new Date(),3,2,1);
        },2000);
    },

    agregarPedido : function(item){
        console.log(item);
    },

    applyEmail : function(value){
        var domain = value.split('@')[1];
        if(domain === 'gmail.com'){
            return value.split('@')[0]+'@bleext.com';
        }
        return value;
    }

});