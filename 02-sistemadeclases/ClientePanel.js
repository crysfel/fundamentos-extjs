/**
 * @class MyApp.view.ClientePanel
 * @extends Ext.panel.Panel
 * @author Crysfel Villa <crysfel@bleext.com>
 *
 * Description
 */

Ext.define('MyApp.view.ClientePanel',{
    extend      : 'Ext.panel.Panel',
    alias       : 'widget.cliente',
    config		: {
		model : null
    },
    
    collapsible : true,
    bodyPadding : 5,
    margin		: 5,

    initComponent   : function(){
        var me = this,
			cliente = Ext.create('MyApp.data.Cliente',this.getModel());
        
        me.title = cliente.getNombre()+' '+cliente.getApellido();
        me.html = [
			'<p>Username: '+cliente.getUsername()+'</p>',
			'<p>Email: '+cliente.getEmail()+'</p>'
        ];

        me.callParent();
    }
});