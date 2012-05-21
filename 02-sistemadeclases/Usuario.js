
Ext.define('MyApp.data.Usuario',{
	username	: '',
	email		: '',
	password	: '',
	nombre		: '',
	apellido	: '',

	constructor	: function(options){
		Ext.apply(this,options || {});

	},

	login		: function(options){
		console.log(this.username,this.password);
	},

	logout	: function(){
		
	}

});