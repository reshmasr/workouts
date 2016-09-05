//module initialization
var GoogleApp = angular.module('GoogleApp', [
    'ngRoute', 'ui.router']);
//enable html5 mode
GoogleApp.config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);
GoogleApp.run(['$location', '$rootScope', '$state', '$timeout', '$anchorScroll',
    function($location, $rootScope, $state, $timeout, $anchorScroll) {
        event.preventDefault();
        $state.go('google');
    }]);


