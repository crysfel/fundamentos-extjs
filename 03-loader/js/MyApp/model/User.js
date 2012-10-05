/**
 * @class MyApp.model.User
 * @extends Ext.data.Model
 * @author Crysfel Villa <crysfel@bleext.com>
 *
 * Description
 */

Ext.define('MyApp.model.User',{
    extend      : 'Ext.data.Model',

    fields : ['email','username']
});