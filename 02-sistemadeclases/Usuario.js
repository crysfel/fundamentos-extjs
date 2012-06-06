
Ext.define('MyApp.data.Usuario',{

	config : {
		username	: '',
		email		: '',
		password	: '',
		nombre		: '',
		apellido	: ''
	},

	constructor	: function(options){
		this.initConfig(options);

	},

	login		: function(options){
		console.log(this.username,this.password);
	},

	logout	: function(){
		
	}

});