angular.module('webcorp.core',[])
.factory('$config', function () {
    return new webcorp.ConfigService();
})
.factory('locationService', function () {
    return new webcorp.LocationService ();
})
.service('$template',['$log', '$http','$templateCache','$q', '$config',function($log,$http,$templateCache,$q, $config){
	var self=this;
    self.get = function(name){
        return $config.get('TemplateRoot','directives/templates/')+name+'.tpl.html';
    };
	self.load=function(name){
		
		var tpl=$templateCache.get(this.get(name));
		if(tpl){
			$log.log('Load template:'+name);
			$log.log(tpl);
			return $q.when(tpl);	
		}else{
			var deffered=$q.defer();
			
			$http.get(self.get(name),{cache:true})
				.success(function(response){
					$templateCache.put(self.get(name),response);
					deffered.resolve(response);
				})
				.error(function(response){
					deffered.reject(response);
				})
				;
			
			return deffered.promise;
			
		}
	}
}])
.provider('$wview',function $wviewProvider(){
	
	var $defaultPartialsRoot='partials/';
	var $defaultHeadSuffix='head';
	var $defaultContentSuffix='content';
	this.setPartialsRoot=function(path){
		$defaultPartialsRoot=path;
	};
	
	this.setDefaultHeadSuffix=function(suffix){
		$defaultHeadSuffix=suffix;
	}
	
	this.setDefaultContentSuffix=function(suffix){
		$defaultContentSuffix=suffix;
	}
	this.head=function(folder,view){
		view=angular.isDefined(view)?folder+'/'+view:folder; 
		return $defaultPartialsRoot + view.toLowerCase() + '.'+$defaultHeadSuffix+'.html';
	};
	this.content = function(folder,view){
		view=angular.isDefined(view)?folder+'/'+view:folder; 
		return $defaultPartialsRoot+ view.toLowerCase() + '.'+$defaultContentSuffix+'.html';
	}
	
	this.$get=function(){return{};};

})
;