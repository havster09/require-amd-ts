"use strict";

// import angular = require("angular");
// import application = require("application");
// import bucks = require("../services/bucks");

import 'angular';
import 'application';
import {BucksService} from './services/bucks';

export interface IMainScope extends ng.IScope {
  awesomeThings: any[];
}

export class MainCtrl {
  static $inject = ["$scope","BucksService"];
  stuff: any[];
  constructor(private $scope: IMainScope, private BucksService) {
    this.stuff = [
      { text: "here is some stuff" },
      { text: "here is some more stuff" },
    ];
   BucksService.getPlayers().then(function(data) {
   console.log(data);
   });
  }
}
