var app = angular.module('cal', ['ngQuickDate']);

app.controller('formCtrl', ['$scope', function($scope){
    $scope.viewType = 'Grid'
    $scope.master = {subject: "What", start: "Start date", end: "End date", startTime: "--:-- --", endTime: "--:-- --", location: "Where"};
    $scope.event = {}
    $scope.events = [];
    $scope.times = makeTimes();
    $scope.viewButton = false;

    $scope.addEvent = function(event) {
        if (event === undefined || event === {}) {return;}
        $scope.events.push(event);
        $scope.event = {};
        $scope.viewButton = true;

    };

    $scope.toggleView = function() {
        $scope.viewType = ($scope.viewType === 'Grid') ? 'List' : 'Grid'

    };

}]);

var makeTimes = function(){
    var modifier = 'am'
    var times = ['12:00' + modifier, '12:30' + modifier]
    for (i=1; i < 12;i++){
       times.push(i + ':00' + modifier)
       times.push(i + ':30' + modifier)
    }
    modifier = 'pm';
    times.push('12:00' + modifier)
    times.push('12:30' + modifier)
    for (i=1; i < 12;i++){
       times.push(i + ':00' + modifier)
       times.push(i + ':30' + modifier)
    }
    return times;
}