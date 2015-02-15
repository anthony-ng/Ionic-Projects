// define a module named starter.services with a dependency on ngResource
angular.module('starter.services', ['ngResource'])

// define a service named Session that uses the Angular resource module to provide access to the REST services at the specified endpoint
.factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
});