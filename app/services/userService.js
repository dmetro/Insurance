module.exports = function ($state) {
    var user = {};
    console.log("service init");

    var add = function (user) {
        user = user;

    };
    var get = function () {
        console.log("get function", user);
        // console.log("get function");
        return user;
    };


    //$scope.goToDepartment =  function()
    //{
    //    $state.go('department');
    //}
}