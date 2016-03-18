System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentService;
    return {
        setters:[],
        execute: function() {
            ComponentService = (function () {
                function ComponentService() {
                }
                ComponentService.prototype.getCourses = function () {
                    return ['Math', 'Program', 'Design'];
                };
                return ComponentService;
            }());
            exports_1("ComponentService", ComponentService);
        }
    }
});
//# sourceMappingURL=component.service.js.map