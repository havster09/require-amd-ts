require.config({
    baseUrl: './scripts',
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery',
        'angular': '../../bower_components/angular/angular',
        'angular-route': '../../bower_components/angular-route/angular-route'

    },
    shim: {
        'jquery': { exports: 'jquery' },
        'angular': { 'exports': 'angular' , deps:['jquery']},
        'angular-route': { exports: 'angular-route', deps: ['angular'] },
        'angularMocks': { deps: ['angular'], 'exports': 'angular.mock' }
    }
});

require([
    'angular',
    'angular-route',
    'application',
    'route'
], function (angular, angularRoute, application, routes) {
    'use strict';
    $(document).ready(function () {
        var $html = $('html');
        angular.bootstrap($html, ['application']);
        $html.addClass('ng-app');
    });
});