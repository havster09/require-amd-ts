import application = require('application');
import main = require('controllers/main');

application.config(function ($routeProvider) {
    $routeProvider.
        when('/', { controller: main.MainCtrl, templateUrl: '../views/main.html' }).
        otherwise({ redirectTo: '/' });
});