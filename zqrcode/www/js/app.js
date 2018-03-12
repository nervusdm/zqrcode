var ZabApp = angular.module('ZabApp',['ui.router']);


ZabApp.controller('ScanCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.scan = function()
    {

alert('ok');

cordova.plugins.diagnostic.getCameraAuthorizationStatus(
    function(status){
        if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
            console.log("Camera use is authorized");
            cordova.plugins.barcodeScanner.scan(
               function (result) {
                   alert("We got a barcode\n" +
                         "Result: " + result.text + "\n" +
                         "Format: " + result.format + "\n" +
                         "Cancelled: " + result.cancelled);
               },
               function (error) {
                   alert("Scanning failed: " + error);
               }
            );



        }
    }, function(error){
        console.error("The following error occurred: "+error);
        alert('ERREUR diagnostic camera');
    }, {
        externalStorage: false
    }
);



    }
});


ZabApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
        .state('login', {
                        url: "/login",
            views: {
                    "main":
                    {
                        templateUrl: 'modules/authentication/views/login.html',
                        hideMenus: true,
                        controller: 'LoginController'
                    }
            }
        })
        .state('scan', {
                        url: "/scan/",
            views: {
                    "main":
                    {
                      templateUrl: 'templates/scan.html',
                        hideMenus: true,
                        controller: 'ScanCtrl'
                    }
            }
        })



        .state('home', {
                       url: "/",
                views:
                {
                    "main":
                    {
                         templateUrl: 'templates/main.html',
                        hideMenus: true,
                      //  controller: 'HomeController',
                    }
                }

        });

        $urlRouterProvider.otherwise('/home' );

});

/*
ZabApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    })
    .otherwise({
      templateUrl:"templates/main.html"

    })


    ;
});
*/