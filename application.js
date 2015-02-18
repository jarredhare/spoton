function formController ($scope) {
    $scope.master = {subject: "What", start: "Start date", end: "End date", startTime: "--:-- --", endTime: "--:-- --", location: "Where"};
    $scope.addEvent = function() {
        // $scope.event = angular.copy($scope.master);
    };
};