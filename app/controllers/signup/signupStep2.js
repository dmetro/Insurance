module.exports = function ($scope, BackendService, $state, $rootScope, $localStorage) {
    $scope.user = $rootScope.user;

    $scope.fisnihSteptwo = function () {
        saveState(2);
        $state.go("form.chooseProduct");

    }

    function saveState(stepnumber) {
        $rootScope.user = $scope.user;
        $localStorage.user = $rootScope.user;
        var steps = JSON.parse(localStorage.getItem("steps"));
        steps.step2 = true;
        localStorage.steps = JSON.stringify(steps);
    }

}