/**
 * @class MyApp.store.Facturas
 * @extends Ext.data.Store
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * 
 */
Ext.define('MyApp.store.Facturas', {
    extend  : 'Ext.data.Store',
    alias   : 'store.facturas',
    model   : 'MyApp.model.Factura',

    proxy   : {
        type : 'ajax',
        url  : 'serverside/getFacturas.json',
        reader : {
            type : 'json',
            root : 'data'
        }
    }

});