webcorp.define('webcorp.DependencyService',function(){
	var self={};
	self.dependencies=[];
	
	self.add=function(dep){
		self.dependencies.push(dep);
	}
	
	return self;
	
});

webcorp.dependencies= new webcorp.DependencyService ();