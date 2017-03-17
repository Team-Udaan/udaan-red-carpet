(function () {
  'use strict';

  angular.module('urcApp')
    .controller('RisingStarCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.data = URC_DATA['rising-star'];

      $scope.select = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.risingStar = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.next = function () {
        $location.url('/sports-icon');
      };

      $scope.sectionFilled = function () {
        if (Data.form.risingStar)
          return true;
      };

      $location.url(Data.properView());
    });

})();