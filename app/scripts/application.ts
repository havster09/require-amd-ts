'use strict';

/// <amd-dependency path="angular"/>

// Alternate way for dependency for TS 9
//declare module "angular"{}
//declare module "showdown"{}
//import angular = module("angular");
//import showdown= module("showdown");

// import angular = require('angular');
// import angularRoute = require('angular-route');
// import angularMocks = require('angular-mocks/ngMock');

import 'angular';
import 'angular-route';
import 'angular-mocks';

var application = angular.module('application', ['ngRoute', 'ngMockE2E']);
export {application};