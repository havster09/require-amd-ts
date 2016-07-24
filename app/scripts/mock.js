define(["require", "exports", 'application'], function (require, exports, application) {
    "use strict";
    application.run(mock);
    mock.$inject = ['$httpBackend'];
    function mock($httpBackend) {
        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenGET(/views\/.*/).passThrough();
    }
    ;
    return mock;
});
//# sourceMappingURL=mock.js.map