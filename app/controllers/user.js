module.exports = function ($scope, BackendService, $state) {

    $scope.userName = "";
    $scope.password = "";
    $scope.messageToUser = "Dad's Shop";
    removeLocalStorage('user_login');
    $scope.loading = false;

    $scope.login = function () {
        if ($scope.userName != '' && $scope.password) {
            console.log($scope.userName, $scope.password);
            $scope.loading = true;
            var data = JSON.stringify({ userName: $scope.userName, password: $scope.password });
            BackendService.login(data).then(function (response) {
                if (response != null) {
                    if (response.data["Error"] != '') {
                        console.log("Error login funtion");
                        $scope.messageToUser = 'Email or Password not correct';
                    }
                    else {
                        console.log("good", response);
                        setLocalStorage('user_login', $scope.userName);
                        $scope.messageToUser = 'Welcome back ' + response.data.data.userName;
                        $state.go('main');
                    }
                    $scope.loading = false;
                }
            });
        }
    }

    $scope.register = function () {       
        var userName = $scope.r_userName;
        var email = $scope.r_email;
        var password = $scope.r_password;
        var password2 = $scope.r_passwordConfirm;

        if (!angular.isUndefined(userName) && !angular.isUndefined(email)
            && !angular.isUndefined(password) && !angular.isUndefined(password2)) {
            if (password == password2) {
                $scope.loading = true;
                var data = {};
                data.userName = userName;
                data.email = email;
                data.password = password;
                var jsonData = JSON.stringify(data);
                BackendService.register(data).then(function (response) {
                    if (response != null) {
                        if (response.data["Error"] != '') {
                            console.log("Error register funtion");
                        }
                        else {
                            console.log("ok", response);
                            setLocalStorage('user_login', $scope.r_userName);
                            $state.go('main');
                        }
                        $scope.loading = false;
                    }
                });
            } else {
                // passwords not the same
            }
        }
    }

    function setLocalStorage(key, value)
    {
        window.localStorage.setItem(key, value);
    }
    function getLocalStorage(key)
    {
        return window.localStorage.getItem(key);
    }   
    function removeLocalStorage(key)
    {
        window.localStorage.removeItem(key);
    }
    
    $scope.favorites = [];
    var userId = 12;
    BackendService.getFavorite(userId).then(function (response) {
        if (response != null) {
            if (response.data["Error"] != '') {
                console.log("Error getFavorite funtion");
            }
            else {
                console.log("ok 1", response);
                for (var i = 0; i < 5; i++) {
                    var favorite = {};
                    favorite.Pic = "";
                    favorite.Name = "name";
                    favorite.Price = "150";
                    favorite.Description = "description description";
                    $scope.favorites.push(favorite);
                }
            }
            $scope.loading = false;
        } else {
            console.log("getFavorite resopnse null");
        }
    });

    

}