import {application} from 'application';

application.run(mock);
mock.$inject = ['$httpBackend'];
function mock($httpBackend: angular.IHttpBackendService): void {
    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET(/views\/.*/).passThrough();

    const getPlayers = '/api/players/';
    const getPlayersBucks = {
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

};

export = mock;

