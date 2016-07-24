define(["require", "exports", 'application', 'controllers/main'], function (require, exports, application, main) {
    "use strict";
    application.config(function ($routeProvider) {
        $routeProvider.
            when('/', {
            controller: main.MainCtrl,
            controllerAs: 'ctrl',
            templateUrl: '../views/main.html'
        }).
            otherwise({ redirectTo: '/' });
    });
});
//# sourceMappingURL=route.js.map