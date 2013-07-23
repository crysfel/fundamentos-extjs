
Ext.define('MyApp.data.Usuario',{

	statics : {
		contador : 0,
		getNextId : function(){
			return ++this.contador;
		}
	},

	config : {
		username	: '',
		email		: '',
		password	: '',
		nombre		: '',
		apellido	: ''
	},

	constructor	: function(options){
		this.initConfig(options);
		this.id = MyApp.data.Usuario.getNextId();
	},

	login		: function(options){
		console.log(this.username,this.password);
	},

	logout	: function(){
		
	}

});