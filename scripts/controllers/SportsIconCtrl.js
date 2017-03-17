(function () {
  'use strict';

  angular.module('urcApp')
    .controller('SportsIconCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.data = URC_DATA['sports-icon'];

      $scope.select = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.sportsIcon = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.next = function () {
        $location.url('/face-of-the-year');
      };

      $scope.sectionFilled = function () {
        if (Data.form.sportsIcon)
          return true;
      };

      $location.url(Data.properView());
    });

})();