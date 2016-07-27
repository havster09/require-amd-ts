define(["require", "exports", 'angular', 'application'], function (require, exports) {
    "use strict";
    var MainCtrl = (function () {
        function MainCtrl($scope, BucksService) {
            this.$scope = $scope;
            this.BucksService = BucksService;
            this.stuff = [
                { text: "here is some stuff" },
                { text: "here is some more stuff" },
            ];
            BucksService.getPlayers().then(function (data) {
                console.log(data);
            });
        }
        MainCtrl.$inject = ["$scope", "BucksService"];
        return MainCtrl;
    }());
    exports.MainCtrl = MainCtrl;
});
//# sourceMappingURL=main.js.map