// ROUTES
geoApp.config(function($routeProvider){
    
    $routeProvider
    
    .when ('/', {

        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when ('/result', {
    
        templateUrl: 'pages/result.htm',
        controller: 'resultController'
    })
    
});
