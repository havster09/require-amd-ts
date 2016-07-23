'use strict';

/// <amd-dependency path="angular"/>

// Alternate way for dependency for TS 9
//declare module "angular"{}
//declare module "showdown"{}
//import angular = module("angular");
//import showdown= module("showdown");

import angular = require('angular');
import angularRoute = require('angular-route');

var application = angular.module('application', ['ngRoute']);
export = application