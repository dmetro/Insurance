module.exports = function ($scope, BackendService, $state, dataService, $localStorage, $rootScope) {

    console.log("sign up init ");

    $scope.user = $rootScope.user;


    $scope.FinishStepOne = function () {

        localStorage.user = JSON.stringify($scope.user);
        var steps = JSON.parse(localStorage.getItem("steps"));
        steps.step1 = true;
        localStorage.steps = JSON.stringify(steps);
        $rootScope.user = $scope.user;
        $state.go('form.UserInfoPart2');

    }



}