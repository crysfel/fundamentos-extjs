/**
 * @class MyApp.view.ClientePanel
 * @extends Ext.panel.Panel
 * @author Crysfel Villa <crysfel@bleext.com>
 *
 * Description
 */

Ext.define('MyApp.view.ClientePanel',{
    extend      : 'Ext.panel.Panel',
    alias       : 'widget.clientepanel',
    requires    : [
        'MyApp.model.Client',
        'MyApp.model.User'
    ],

    initComponent   : function(){
        var me = this;
        
        me.model = Ext.create('MyApp.model.Client',me.cliente);
        
        me.tpl = [
            '<p>{nombre} {apellido}</p>'
        ];
        me.data = me.model.getData();

        me.callParent();
    }
});