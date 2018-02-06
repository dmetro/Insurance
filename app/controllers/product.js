module.exports = function ($scope, BackendService, $state, dataService) {

    var product = dataService.product();
    if (!isEmpty(product)) {
        console.log("product: ", product);
        $scope.product = product;
    } else {
        //var cookieWObject = $cookieStore.getObject('cookieName');
        console.log("empty");
    }
    console.log(product);

    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }
}