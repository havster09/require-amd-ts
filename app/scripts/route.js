define(["require", "exports", 'application', './controllers/main'], function (require, exports, application_1, main) {
    "use strict";
    application_1.application.config(function ($routeProvider) {
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