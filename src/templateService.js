webcorp.define('webcorp.TemplateService',function(){
	var self={};
    
	webcorp.Config = webcorp.Config || {};
	self.get = function (template) {
        return $config.get('TemplateRoot','directives/templates/')+'menus.tpl.html';
        var value = webcorp.Config[key];

        if (_.isUndefined(value) && !_.isUndefined(defaultValue)) {
            return defaultValue;
        }

        return value;
    };
	
	

    return self;
});