import application = require('application');
import main = require('controllers/main');

application.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            controller: main.MainCtrl,
            controllerAs: 'ctrl',
            templateUrl: '../views/main.html' 
        }).
        otherwise({ redirectTo: '/' });
});