(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchItems = "";

        $scope.quantityChecker = function () {
            var items = $scope.lunchItems.split(',');
            var itemQuantity = items.length;
            var msg = "";

            if(items[0] == "") {
                msg = "Please enter data first";
            } else if(itemQuantity <= 3) {
                msg = "Enjoy!";
            } else {
                msg = "Too much!";
            }
            $scope.message = msg;
        }
    }

})();
