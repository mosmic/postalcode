// CONTROLLERS
geoApp.controller('homeController', ['$scope', '$location', 'addressService', function($scope, $location, addressService) {

    $scope.address = addressService.address;
    
    $scope.$watch('address' , function(){
    
        addressService.address = $scope.address;
    
    })
    
    $scope.submit = function() {
    
        $location.path("/result");
    
    };
    
}]);


geoApp.controller('resultController', ['$scope', '$resource', '$routeParams', 'addressService', function($scope, $resource, $routeParams, addressService) {

    $scope.address = addressService.address;
    
    apiKey = 'AIzaSyCVhQlHZ4cZbQB_zBKBviXf9gLFgqklCPw';
    
    $scope.geoAPI = $resource("https://maps.googleapis.com/maps/api/geocode/json");

    $scope.geoResult = $scope.geoAPI.get({ address: $scope.address, key: apiKey });
        
    
}]);
