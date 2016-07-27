require.config({
  baseUrl: "./scripts",
  paths: {
    "jquery": "../../bower_components/jquery/dist/jquery",
    "angular": "../../bower_components/angular/angular",
    "angular-route": "../../bower_components/angular-route/angular-route",
    "angular-mocks": "../../bower_components/angular-mocks/angular-mocks"

  },
  shim: {
    "jquery": { exports: "jquery" },
    "angular": { "exports": "angular", deps: ["jquery"] },
    "angular-route": { exports: "angular-route", deps: ["angular"] },
    "angular-mocks": { exports: "angular-mocks", deps: ["angular"] }
  }
});

require([
  "angular",
  "angular-route",
  "angular-mocks",
  "application",
  "route",
  "mock",
  "./services/bucks"
], function(angular, application, routes, mock, bucks) {
  "use strict";
  $(document).ready(function() {
    const $html = $("html");
    angular.bootstrap($html, ["application"]);
    $html.addClass("ng-app");
  });
});
