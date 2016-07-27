define(["require", "exports", 'application'], function (require, exports, application_1) {
    "use strict";
    application_1.application.run(mock);
    mock.$inject = ['$httpBackend'];
    function mock($httpBackend) {
        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenGET(/views\/.*/).passThrough();
        var getPlayers = '/api/players/';
        var getPlayersBucks = {
            status: 200,
            message: 'success',
            data: [{
                    firstName: 'thon',
                    lastName: 'maker',
                    number: 7,
                    team: 'bucks',
                    position: 'pf'
                }]
        };
        $httpBackend.whenGET(getPlayers + 'bucks').respond(getPlayersBucks);
    }
    ;
    return mock;
});
//# sourceMappingURL=mock.js.map