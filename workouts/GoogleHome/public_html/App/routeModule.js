GoogleApp.config(['$urlRouterProvider', '$httpProvider', '$stateProvider',
    function($urlRouterProvider, $httpProvider, $stateProvider) {
        $httpProvider.defaults.cache = false;
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        //disable IE ajax request caching
        //$httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

//        $urlRouterProvider.otherwise('/google/');

        $stateProvider.state('google', {
            url: "google/",
            absolute: true,
            controller: 'homeController',
            templateUrl: "App/Home/homeView.html"
        });
    }]);


