/**
 * @class MyApp.model.Factura
 * @extends Ext.data.Model
 * @author Crysfel Villa <crysfel@bleext.com>
 *
 * Description
 */

Ext.define('MyApp.model.Factura',{
    extend      : 'Ext.data.Model',

    idProperty  : 'folio',
    fields      : [
        {name:'folio',type:'int'},
        {name:'cliente'},
        {name:'direccion'},
        {name:'fecha',type:'date',dateFormat:'Y-m-d h:i:s'},
        {name:'cobrada',type:'boolean',defaultValue:false}
    ]
});