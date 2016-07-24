import angular = require('angular');
import application = require('application');
'use strict';

  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainCtrl {
    stuff:any[];
    constructor (private $scope: IMainScope) {
      this.stuff = [
        {text:'here is some stuff'},
        {text:'here is some more stuff'},
      ]
    }
  }



