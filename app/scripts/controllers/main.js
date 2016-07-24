define(["require", "exports"], function (require, exports) {
    "use strict";
    'use strict';
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            this.$scope = $scope;
            this.stuff = [
                { text: 'here is some stuff' },
                { text: 'here is some more stuff' },
            ];
        }
        return MainCtrl;
    }());
    exports.MainCtrl = MainCtrl;
});
//# sourceMappingURL=main.js.map