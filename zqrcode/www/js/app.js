var ZabApp = angular.module('ZabApp',['ui.router','ngAnimate']);


ZabApp.controller('ScanCtrl', function($scope,$rootScope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
$rootScope.title = "HexaSalon Scan";



    $scope.scan = function()
    {


alert('ok');


QRScanner.scan(displayContents);

function displayContents(err, text){
  if(err){
    // an error occurred, or the scan was canceled (error code `6`)
    alert('zut erreur');
  } else {
    // The scan completed, display the contents of the QR code:
    alert(text);
  }
}

// Make the webview transparent so the video preview is visible behind it.
QRScanner.show();




/*
return ;

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
*/


    }
});



ZabApp.controller('ExposantCtrl', function($scope,$rootScope) {

  $rootScope.title = "Nos Exposants";


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
        .state('exposant', {
                        url: "/exposant/",
            views: {
                    "main":
                    {
                      templateUrl: 'templates/exposant.html',
                        hideMenus: true,
                        controller: 'ExposantCtrl'
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
