(function () {
  'use strict';

  angular.module('urcApp')
    .controller('FormCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.about = URC_DATA.about.replace('\n', '</p><p>');

      $scope.next = function () {
        $location.url('/rising-star');
      };

      if (!Data.login.isLoggedIn) {
        $location.url('/login');
      }
    });

})();