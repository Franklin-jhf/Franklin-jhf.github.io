angular.module('app', [])

.controller('ResizeController', function($scope) {
    $scope.topLeft = "left1"

    $scope.expandGreen = function() {
        if ($scope.topLeft === "left1") {
            $scope.topLeft = "left1Expand"
        } else {
            $scope.topLeft = "left1";
        }
    }
});