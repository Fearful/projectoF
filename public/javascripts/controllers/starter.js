"use strict";

angular
    .module('starterApp', ['ngMaterial'])
    .config(function($mdThemingProvider, $mdIconProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('green')
                .accentPalette('amber');
            $mdIconProvider.iconSet("avatar", './images/avatar-icons.svg', 128);
    })
    .controller("appCtrl", ["$scope", "$mdSidenav", "$mdUtil", "$log", function($scope, $mdSidenav, $mdUtil, $log){
      $scope.toggleLeft = buildToggler('left');
      /**
       * Build handler to open/close a SideNav; when animation finishes
       * report completion in console
       */
      function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
              $mdSidenav(navID)
                .toggle();
            },150);
        return debounceFn;
      }
      $scope.close = function () {
        $mdSidenav('left').close();
      };
    }]).controller('LeftCtrl', ['$scope', function(scope){

    }]);