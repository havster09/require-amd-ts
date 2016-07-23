define(["require", "exports"], function (require, exports) {
    "use strict";
    'use strict';
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                '6 figure nigaa',
                'AngularJS',
                'Karma'
            ];
            console.log($scope.awesomeThings);
        }
        return MainCtrl;
    }());
    exports.MainCtrl = MainCtrl;
});
//# sourceMappingURL=main.js.map