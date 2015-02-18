function formController ($scope) {
    $scope.master = {subject: "What", start: "Start date", end: "End date", startTime: "--:-- --", endTime: "--:-- --", location: "Where"};
    $scope.events = [];
    $scope.addEvent = function(event) {
        if (event === undefined || event === {}) {return;}
        $scope.events.push(event);
        $scope.event = {};
    };
};