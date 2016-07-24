require.config({
    baseUrl: './scripts',
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery',
        'angular': '../../bower_components/angular/angular',
        'angular-route': '../../bower_components/angular-route/angular-route',
        'angular-mocks': '../../bower_components/angular-mocks/angular-mocks'

    },
    shim: {
        'jquery': { exports: 'jquery' },
        'angular': { 'exports': 'angular' , deps:['jquery']},
        'angular-route': { exports: 'angular-route', deps: ['angular'] },
        'angular-mocks': { deps: ['angular'], 'exports': 'angular-mocks' }
    }
});

require([
    'angular',
    'angular-route',
    'angular-mocks',
    'application',
    'route',
    'mock'
], function (angular, angularRoute, angularMocks, application, routes, mock) {
    'use strict';
    $(document).ready(function () {
        var $html = $('html');
        angular.bootstrap($html, ['application']);
        $html.addClass('ng-app');
    });
});