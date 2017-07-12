angular.module('app', [])

.controller('ResizeController', function($scope) {
    
    // $scope.welcome = "welcome";

    $scope.reset = function() {
    }
        $scope.welcome = "";
        $scope.section1 = "section1";
        $scope.topLeft = "left1";
        $scope.topRight = "right1";
        $scope.section2 = "section2";
        $scope.botLeft = "left2";
        $scope.botRight = "right2";


    $scope.expandLeft1= function() {
        if ($scope.topLeft === "left1") {
            $scope.topLeft = "left1Expand";
            $scope.section1 = "section1Expand"
        } else {
            $scope.topLeft = "left1";
            $scope.section1 = "section1"
        }
    }

    $scope.expandRight1 = function() {
        if ($scope.topRight === "right1") {
            $scope.topRight = "right1Expand";
            $scope.section1 = "section1Expand"
        } else {
            $scope.topRight = "right1";
            $scope.section1 = "section1"
        }
    }

    $scope.expandLeft2= function() {
        if ($scope.botLeft === "left2") {
            $scope.botLeft = "left2Expand";
            $scope.section2 = "section2Expand"
        } else {
            $scope.botLeft = "left2";
            $scope.section2 = "section2"
        }
    }

    $scope.expandRight2 = function() {
        if ($scope.botRight === "right2") {
            $scope.botRight = "right2Expand";
            $scope.section2 = "section2Expand"
        } else {
            $scope.botRight = "right2";
            $scope.section2 = "section2"
        }
    }

});