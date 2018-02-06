


module.exports = function ($scope, BackendService, $state, dataService) {

    $scope.formData = {};
    $state.go('form.UserInfo');
    // function to process the form
    $scope.processForm = function () {
        alert('awesome!');
    };



}