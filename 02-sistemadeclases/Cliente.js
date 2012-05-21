/**
 * @class MyApp.data.Cliente
 * @extends MyApp.data.Usuario
 * @author Crysfel Villa <crysfel@bleext.com>
 *
 * Description
 */

Ext.define('MyApp.data.Cliente',{
    extend      : 'MyApp.data.Usuario',
    
    rfc     : '',
    calle   : '',
    colonia : '',
    ciudad  : '',
    estado  : '',
    pais    : '',

    constructor : function(options){
        console.log('Constructor en la subclase!');

        this.callParent([options]);
    },

    login       : function(item){
        console.log('Login: Dentro de la subclase');

        this.callParent(arguments);
    },

    agregarPedido : function(item){
        console.log(item);
    }

});