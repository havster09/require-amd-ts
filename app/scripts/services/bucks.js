define(["require", "exports", 'application', 'angular'], function (require, exports, application_1) {
    "use strict";
    var BucksService = (function () {
        function BucksService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        BucksService.prototype.getPlayers = function () {
            var deferred = this.$q.defer();
            this.$http.get('/api/players/bucks').success(function (data) {
                deferred.resolve(data);
            }).error(function (status) {
                deferred.reject(status);
            });
            return deferred.promise;
        };
        BucksService.$inject = ["$http", "$q"];
        return BucksService;
    }());
    exports.BucksService = BucksService;
    application_1.application.service('BucksService', BucksService);
});
//# sourceMappingURL=bucks.js.map