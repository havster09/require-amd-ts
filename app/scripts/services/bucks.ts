import 'angular';
import {application} from 'application';

export interface IGetPlayer {
    status: number;
    message: string;
    data: {};
}

export interface IBucksService {
    getPlayers(): ng.IPromise<IGetPlayer>;
}

export class BucksService implements IBucksService {
    static $inject = ["$http", "$q"];
    constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

    }
    public getPlayers() {
        const deferred: ng.IDeferred<{}> = this.$q.defer();
        this.$http.get('/api/players/bucks').success((data: ng.IHttpPromiseCallback<{}>) => {
            deferred.resolve(data);
        }).error((status: ng.IHttpPromiseCallback<{}>) => {
            deferred.reject(status);
        });
        return deferred.promise;
    }
}

application.service('BucksService', BucksService);

