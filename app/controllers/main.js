module.exports = function ($scope, BackendService, $state, dataService, $rootScope) {

    $scope.loading = true;
    $scope.customer = {};
    $scope.customerStep = {};
    console.log("rootscope main", $rootScope.user);
    $scope.user = $rootScope.user;
    if (localStorage.steps) {
        var steps = JSON.parse(localStorage.getItem("steps"))
    }
    else {
        var steps = {
            "formInit": false,
            "step1": false,
            "step2": false,
            "step3": false,
            "formFinished": false
        }
    }


    $scope.customerStep = steps;
    if ($scope.customerStep) {
        if ($scope.customerStep.step1 == true && $scope.customerStep.step2 == false) {
            $state.go("form.UserInfoPart2");
        }
        else if ($scope.customerStep.step1 == true && $scope.customerStep.step2 == true && $scope.customerStep.step3 == false) {
            $state.go("form.UserInfoPart2");
        }
        else if ($scope.customerStep.step1 == true && $scope.customerStep.step2 == true && $scope.customerStep.step3 == true)
        {
            $state.go("form.chooseProduct");
        }
        else if ($scope.customerStep.formInit == false)
        {
            console.log("form init starts")
        }
    }
    //$scope.steps = steps;



    //var data = JSON.stringify({ skip: $scope.skip, take: $scope.take});
    //BackendService.getAllProducts(data).then(function (response) {
    //    //if (response != null) {
    //    //    if (response.data["Error"] != null) {
    //    //        $scope.products = response.data.data;
    //    //        $scope.loading = false;               
    //    //    }
    //    //    else {
    //    //        console.log("Issue getAllProducts()");
    //    //    }
    //    //}
    //});
    //{

    //    var data = JSON.stringify({ skip: $scope.skip, take: $scope.take });
    //    BackendService.getAllProducts(data).then(function (response) {
    //        if (response != null) {
    //            if (response.data["Error"] != null) {
    //                var pr = response.data.data;
    //                for (var i = 0; i < pr.length; i++) {
    //                    console.log(pr[i]);
    //                    $scope.products.push(pr[i]);
    //                }
    //                console.log("load more data: ", response.data.data);
    //                $scope.loading = false;
    //            }
    //            else {
    //                console.log("Issue getAllProducts()");
    //            }
    //        }
    //    });
    //}



    $scope.goToSignUpForm = function () {
        $scope.customerStep.formInit = true;
        localStorage.steps = JSON.stringify($scope.customerStep);
        $state.go('form');
    }




}