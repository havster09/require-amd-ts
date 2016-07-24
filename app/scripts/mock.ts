import application = require('application');

application.run(mock);
mock.$inject = ['$httpBackend'];
function mock($httpBackend: angular.IHttpBackendService): void {
    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET(/views\/.*/).passThrough();    
};

export = mock;

