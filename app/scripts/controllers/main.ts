import angular = require('angular');
import application = require('application');
'use strict';

  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainCtrl {

    constructor (private $scope: IMainScope) {
      $scope.awesomeThings = [
        '6 figure nigaa',
        'AngularJS',
        'Karma'
      ];

      console.log($scope.awesomeThings);
    }
  }



