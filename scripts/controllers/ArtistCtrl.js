(function () {
  'use strict';

  angular.module('urcApp')
    .controller('ArtistCtrl', function ($scope, Data, $location) {
      $scope.viewport = Data.viewport;

      $scope.data = URC_DATA['artist-of-the-year'];

      $scope.selectMale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.artist.male = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.selectFemale = function (option, event) {
        var selected = angular.element(event.currentTarget);
        Data.form.artist.female = option;
        selected.parent().children().removeClass('rc-selected').addClass('rc-unselected');
        selected.removeClass('rc-unselected').addClass('rc-selected');
      };

      $scope.next = function () {
        $location.url('/vote');
      };

      $scope.sectionFilled = function () {
        if (Data.form.artist.male && Data.form.artist.female)
          return true;
      };

      $location.url(Data.properView());
    });

})();