(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    //console.log("routes");

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '/app/views/main/main.html',
            controller: require('controllers/main.js')
        })
        .state('form', {
            url: '/form',
            templateUrl: '/app/views/signUpForm/form.html',
            controller: require('controllers/signup/form.js')
        })
        .state('form.UserInfo', {
            url: '/User',
            templateUrl: '/app/views/signUpForm/userStepOne.html',
            controller: require('controllers/signup/signupStep1.js')
        })
        .state('form.UserInfoPart2', {
            url: '/moreUserInfo',
            templateUrl: '/app/views/signUpForm/userStepTwo.html',
            controller: require('controllers/signup/signupStep2.js')
        })
        .state('form.chooseProduct', {
            url: '/chooseProduct',
            templateUrl: '/app/views/signUpForm/ChooseProduct.html',
            controller: require('controllers/signup/chooseProduct.js')
        })
        //.state('initial', {
        //    url: '/initial',
        //    templateUrl: '/app/views/signUpForm/initial.html',
        //    controller: require('controllers/signup/InitialSignup.js'),
        //})

        //.state('initial.step1', {
        //    url: '/1',
        //    templateUrl: '/app/views/signUpForm/userStepOne.html',
        //    controller: require('controllers/signup/signupStep1.js') ,
        //    step: 1, // <- Identify the current step inside the SignupCtrl,

        //})
        //.state('initial.step2', {
        //    url: '/2',
        //    templateUrl: 'views/initial-step2.html',
        //    controller: 'InitialStep2Ctrl',
        //    step: 2, // <- Identify the current step inside the SignupCtrl,

        //})

};
},{"controllers/main.js":2,"controllers/signup/chooseProduct.js":3,"controllers/signup/form.js":4,"controllers/signup/signupStep1.js":5,"controllers/signup/signupStep2.js":6}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
module.exports = function ($scope, BackendService, $state, $rootScope, $localStorage) {

    $scope.pensionProducts = [];
    $scope.histalmutProducts = [];
    $scope.gemelhisahon = [];

    var pensionProduct1 = {
        "name": "פנסיה",
        "company": "אלטשולר שחם",
        "img": "https://yt3.ggpht.com/-2EOQ5fgU0sQ/AAAAAAAAAAI/AAAAAAAAAAA/B06HX730x78/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
        "zvira": "0.5",
        "hafkada": "1.8",
        "productId": "1",

    }
    var pensionProduct2 = {
        "name": "פנסיה",
        "company": "פסגות",
        "img": "http://www.elidor.co.il/image.ashx?s=170354&sl=he&im=113513&st=c",
        "zvira": "0.6",
        "hafkada": "1.9",
        "productId": "2",
    }


    var hishtalmutProduct1 = {
        "name": "השתלמות",
        "company": "I B I ",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/68/IBI_Investment_House_logo.jpg",
        "zvira": "0.5",
        "hafkada": "0",
        "productId": "3",
    }
    var hishtalmutProduct2 = {
        "name": "השתלמות",
        "company": "פסגות",
        "img": "http://www.elidor.co.il/image.ashx?s=170354&sl=he&im=113513&st=c",
        "zvira": "0.6",
        "hafkada": "0",
        "productId": "4",
    }
    var hishtalmutProduct3 = {
        "name": "השתלמות",
        "company": "כלל",
        "img": "http://www.issf.org.il/wp-content/uploads/2015/12/clal-430x330.jpg",
        "zvira": "0.6",
        "hafkada": "0",
        "productId": "4",
    }
    var hishtalmutProduct4 = {
        "name": "השתלמות",
        "company": "מנורה",
        "img": "http://images.globes.co.il/images/NewGlobes/big_image_800/2015/MenoraMivtachim-CMYK-800.jpg",
        "zvira": "0.6",
        "hafkada": "0",
        "productId": "5",
    }



    var gemelProduct1 = {
        "name": "גמל",
        "company": "I B I ",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/68/IBI_Investment_House_logo.jpg",
        "zvira": "0.5",
        "hafkada": "0",
        "productId": "6",
    }
    var gemelProduct2 = {
        "name": "גמל",
        "company": "פסגות",
        "img": "http://www.elidor.co.il/image.ashx?s=170354&sl=he&im=113513&st=c",
        "zvira": "0.6",
        "hafkada": "0",
        "productId": "7",
    }
    var gemelProduct3 = {
        "name": "גמל",
        "company": "כלל",
        "img": "http://www.issf.org.il/wp-content/uploads/2015/12/clal-430x330.jpg",
        "zvira": "0.6",
        "hafkada": "0",
        "productId": "8",
    }

    $scope.pensionProducts.push(pensionProduct1);
    $scope.pensionProducts.push(pensionProduct2);

    $scope.histalmutProducts.push(hishtalmutProduct1);
    $scope.histalmutProducts.push(hishtalmutProduct2);
    $scope.histalmutProducts.push(hishtalmutProduct3);
    $scope.histalmutProducts.push(hishtalmutProduct4);



    $scope.gemelhisahon.push(gemelProduct1);
    $scope.gemelhisahon.push(gemelProduct2);
    $scope.gemelhisahon.push(gemelProduct3);
}
},{}],4:[function(require,module,exports){



module.exports = function ($scope, BackendService, $state, dataService) {

    $scope.formData = {};
    $state.go('form.UserInfo');
    // function to process the form
    $scope.processForm = function () {
        alert('awesome!');
    };



}
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
angular.module('Getpensia', ['ui.router', 'ui.bootstrap', 'ngStorage'])
    // Directives
    //.directive(....)

    // Services
    .service('API', require('./services/api.js'))
    .service('BackendService', require('./services/BackendService.js'))
    .service('menuService', require('./services/menuService.js'))
    .service('dataService', require('./services/dataService.js'))

    // Routing
    .config(require('./config/routes.js'))

    // Controllers
    .controller('mainController', function () { })
    .controller('login', function () { })
    .controller('main', function () { })
    .controller('uploadcontent', function () { })
    .controller('department', function () { })
    .controller('product', function () { })
    .controller('signupStep1', function () { })

    .run(function ($rootScope) {
        $rootScope.user = {};

    });



},{"./config/routes.js":1,"./services/BackendService.js":8,"./services/api.js":9,"./services/dataService.js":10,"./services/menuService.js":11}],8:[function(require,module,exports){
module.exports = function backend_service($q, $http, $state) {

    this.getAllProducts = function (data) {
        return $http.post('/api/product/getproducts', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens on getAllProducts';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.login = function (data) {
        return $http.post('/api/user/login', data)
            .then(function (response) {
                //console.log('backend_service login', response);
                return response
            },
        function (err) {
            console.log("error in login " , err);
            err['text'] = 'Something happens on login';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.register = function (data) {
        return $http.post('/api/user/register', data)
            .then(function (response) {
                return response
            },
        function (err) {
            console.log("error in register ", err);
            err['text'] = 'Something happens on register';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.getFavorite = function (id) {
        return $http.get('/api/user/favorite/' + id)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when GetFavorite';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.getAllOrders = function (data) {

        return $http.post('/api/order/getorders/', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            // $state.go('error', { 'error_obj': err });
        })
    }

    this.getAllOrdersBtRotation = function (data) {
        return $http.post('/api/order/getorders/', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            // $state.go('error', { 'error_obj': err });
        })
    }
   
    this.GetAllProductsByCategoryName = function (data) {

        return $http.post('/api/order/getproductscategory/', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            // $state.go('error', { 'error_obj': err });
        })
    }

    this.GetCategories = function (id) {
        return $http.get('/api/order/getcategories/' + id)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.triggerAccounting = function () {
        return $http.get('/api/order/triggeraccounting')
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens while trigger accounting ';
            $state.go('error', { 'error_obj': err });
        })
    }
    
   
};
},{}],9:[function(require,module,exports){
module.exports = function ($q, $http) {
    function request(method, url, data) {
        var deferred = $q.defer();

        $http({
            method: method,
            url: url,
            data: data
        }).then(function (response) {
            deferred.resolve(response.data);
        }, function (response) {
            deferres.reject();
        });

        return deferred.promise;
    }

    function mock(func, timeout) {
        var deferred = $q.defer();
        setTimeout(function (f) {
            deferred.resolve(f());
        }, timeout, func);
        return deferred.promise;
    }

    return {
        // Basic functions
        GET: function (url, data) {
            return request('GET', url, data);
        },
        POST: function (url, data) {
            return request('POST', url, data);
        },

        // Functions
        getWorkers: function () {
            //return request('GET', '/api/worker/all');
            return mock(function () {
                var objs = [];
                for (var i = 0; i < 10; i++) {
                    objs.push({
                        Name: chance.first(),
                        CustomerId: i
                        
                    });
                }
                return objs;
            }, 1500);
        }
    };
};
},{}],10:[function(require,module,exports){
module.exports = function ($state) {

    this.productData = { };

    this.product = function () {
        return this.productData;
    };

    this.setPrice = function (price) {
        this.productData.price = price;
    };
    this.getPrice = function () {
        return this.productData.price;
    };

    this.setName = function (name) {
        this.productData.name = name;
    };
    this.getName = function () {
        return this.productData.name;
    };

    this.setInfo = function (info) {
        this.productData.info = info;
    };
    this.getInfo = function () {
        return this.productData.info;
    };

    this.setPic = function (pic) {
        this.productData.pic = pic;
    };
    this.getPic = function () {
        return this.productData.info;
    };

}
},{}],11:[function(require,module,exports){
module.exports = function ($state) {


    console.log("d123");

    this.test = function () {
        console.log("test");
    }

    this.goTodepartment = function () {
        $state.go('department');
    }
    //$scope.goToDepartment =  function()
    //{
    //    $state.go('department');
    //}
}
},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29uZmlnL3JvdXRlcy5qcyIsImFwcC9jb250cm9sbGVycy9tYWluLmpzIiwiYXBwL2NvbnRyb2xsZXJzL3NpZ251cC9jaG9vc2VQcm9kdWN0LmpzIiwiYXBwL2NvbnRyb2xsZXJzL3NpZ251cC9mb3JtLmpzIiwiYXBwL2NvbnRyb2xsZXJzL3NpZ251cC9zaWdudXBTdGVwMS5qcyIsImFwcC9jb250cm9sbGVycy9zaWdudXAvc2lnbnVwU3RlcDIuanMiLCJhcHAvZW50cnkuanMiLCJhcHAvc2VydmljZXMvQmFja2VuZFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvYXBpLmpzIiwiYXBwL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLmpzIiwiYXBwL3NlcnZpY2VzL21lbnVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9tYWluJyk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcInJvdXRlc1wiKTtcclxuXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnbWFpbicsIHtcclxuICAgICAgICAgICAgdXJsOiAnL21haW4nLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvdmlld3MvbWFpbi9tYWluLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiByZXF1aXJlKCdjb250cm9sbGVycy9tYWluLmpzJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnZm9ybScsIHtcclxuICAgICAgICAgICAgdXJsOiAnL2Zvcm0nLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvdmlld3Mvc2lnblVwRm9ybS9mb3JtLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiByZXF1aXJlKCdjb250cm9sbGVycy9zaWdudXAvZm9ybS5qcycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ2Zvcm0uVXNlckluZm8nLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9Vc2VyJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL3ZpZXdzL3NpZ25VcEZvcm0vdXNlclN0ZXBPbmUuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IHJlcXVpcmUoJ2NvbnRyb2xsZXJzL3NpZ251cC9zaWdudXBTdGVwMS5qcycpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ2Zvcm0uVXNlckluZm9QYXJ0MicsIHtcclxuICAgICAgICAgICAgdXJsOiAnL21vcmVVc2VySW5mbycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC92aWV3cy9zaWduVXBGb3JtL3VzZXJTdGVwVHdvLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiByZXF1aXJlKCdjb250cm9sbGVycy9zaWdudXAvc2lnbnVwU3RlcDIuanMnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdmb3JtLmNob29zZVByb2R1Y3QnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9jaG9vc2VQcm9kdWN0JyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL3ZpZXdzL3NpZ25VcEZvcm0vQ2hvb3NlUHJvZHVjdC5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogcmVxdWlyZSgnY29udHJvbGxlcnMvc2lnbnVwL2Nob29zZVByb2R1Y3QuanMnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8uc3RhdGUoJ2luaXRpYWwnLCB7XHJcbiAgICAgICAgLy8gICAgdXJsOiAnL2luaXRpYWwnLFxyXG4gICAgICAgIC8vICAgIHRlbXBsYXRlVXJsOiAnL2FwcC92aWV3cy9zaWduVXBGb3JtL2luaXRpYWwuaHRtbCcsXHJcbiAgICAgICAgLy8gICAgY29udHJvbGxlcjogcmVxdWlyZSgnY29udHJvbGxlcnMvc2lnbnVwL0luaXRpYWxTaWdudXAuanMnKSxcclxuICAgICAgICAvL30pXHJcblxyXG4gICAgICAgIC8vLnN0YXRlKCdpbml0aWFsLnN0ZXAxJywge1xyXG4gICAgICAgIC8vICAgIHVybDogJy8xJyxcclxuICAgICAgICAvLyAgICB0ZW1wbGF0ZVVybDogJy9hcHAvdmlld3Mvc2lnblVwRm9ybS91c2VyU3RlcE9uZS5odG1sJyxcclxuICAgICAgICAvLyAgICBjb250cm9sbGVyOiByZXF1aXJlKCdjb250cm9sbGVycy9zaWdudXAvc2lnbnVwU3RlcDEuanMnKSAsXHJcbiAgICAgICAgLy8gICAgc3RlcDogMSwgLy8gPC0gSWRlbnRpZnkgdGhlIGN1cnJlbnQgc3RlcCBpbnNpZGUgdGhlIFNpZ251cEN0cmwsXHJcblxyXG4gICAgICAgIC8vfSlcclxuICAgICAgICAvLy5zdGF0ZSgnaW5pdGlhbC5zdGVwMicsIHtcclxuICAgICAgICAvLyAgICB1cmw6ICcvMicsXHJcbiAgICAgICAgLy8gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9pbml0aWFsLXN0ZXAyLmh0bWwnLFxyXG4gICAgICAgIC8vICAgIGNvbnRyb2xsZXI6ICdJbml0aWFsU3RlcDJDdHJsJyxcclxuICAgICAgICAvLyAgICBzdGVwOiAyLCAvLyA8LSBJZGVudGlmeSB0aGUgY3VycmVudCBzdGVwIGluc2lkZSB0aGUgU2lnbnVwQ3RybCxcclxuXHJcbiAgICAgICAgLy99KVxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJhY2tlbmRTZXJ2aWNlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlLCAkcm9vdFNjb3BlKSB7XHJcblxyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLmN1c3RvbWVyID0ge307XHJcbiAgICAkc2NvcGUuY3VzdG9tZXJTdGVwID0ge307XHJcbiAgICBjb25zb2xlLmxvZyhcInJvb3RzY29wZSBtYWluXCIsICRyb290U2NvcGUudXNlcik7XHJcbiAgICAkc2NvcGUudXNlciA9ICRyb290U2NvcGUudXNlcjtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2Uuc3RlcHMpIHtcclxuICAgICAgICB2YXIgc3RlcHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RlcHNcIikpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgc3RlcHMgPSB7XHJcbiAgICAgICAgICAgIFwiZm9ybUluaXRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwic3RlcDFcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwic3RlcDJcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwic3RlcDNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiZm9ybUZpbmlzaGVkXCI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkc2NvcGUuY3VzdG9tZXJTdGVwID0gc3RlcHM7XHJcbiAgICBpZiAoJHNjb3BlLmN1c3RvbWVyU3RlcCkge1xyXG4gICAgICAgIGlmICgkc2NvcGUuY3VzdG9tZXJTdGVwLnN0ZXAxID09IHRydWUgJiYgJHNjb3BlLmN1c3RvbWVyU3RlcC5zdGVwMiA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oXCJmb3JtLlVzZXJJbmZvUGFydDJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCRzY29wZS5jdXN0b21lclN0ZXAuc3RlcDEgPT0gdHJ1ZSAmJiAkc2NvcGUuY3VzdG9tZXJTdGVwLnN0ZXAyID09IHRydWUgJiYgJHNjb3BlLmN1c3RvbWVyU3RlcC5zdGVwMyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oXCJmb3JtLlVzZXJJbmZvUGFydDJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCRzY29wZS5jdXN0b21lclN0ZXAuc3RlcDEgPT0gdHJ1ZSAmJiAkc2NvcGUuY3VzdG9tZXJTdGVwLnN0ZXAyID09IHRydWUgJiYgJHNjb3BlLmN1c3RvbWVyU3RlcC5zdGVwMyA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJHN0YXRlLmdvKFwiZm9ybS5jaG9vc2VQcm9kdWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgkc2NvcGUuY3VzdG9tZXJTdGVwLmZvcm1Jbml0ID09IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3JtIGluaXQgc3RhcnRzXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8kc2NvcGUuc3RlcHMgPSBzdGVwcztcclxuXHJcblxyXG5cclxuICAgIC8vdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7IHNraXA6ICRzY29wZS5za2lwLCB0YWtlOiAkc2NvcGUudGFrZX0pO1xyXG4gICAgLy9CYWNrZW5kU2VydmljZS5nZXRBbGxQcm9kdWN0cyhkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy8gICAgLy9pZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgLy8gICAgaWYgKHJlc3BvbnNlLmRhdGFbXCJFcnJvclwiXSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAvLyAgICAgICAgJHNjb3BlLnByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgLy8gICAgLy8gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7ICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAvLyAgICB9XHJcbiAgICAvLyAgICAvLyAgICBlbHNlIHtcclxuICAgIC8vICAgIC8vICAgICAgICBjb25zb2xlLmxvZyhcIklzc3VlIGdldEFsbFByb2R1Y3RzKClcIik7XHJcbiAgICAvLyAgICAvLyAgICB9XHJcbiAgICAvLyAgICAvL31cclxuICAgIC8vfSk7XHJcbiAgICAvL3tcclxuXHJcbiAgICAvLyAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgc2tpcDogJHNjb3BlLnNraXAsIHRha2U6ICRzY29wZS50YWtlIH0pO1xyXG4gICAgLy8gICAgQmFja2VuZFNlcnZpY2UuZ2V0QWxsUHJvZHVjdHMoZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVtcIkVycm9yXCJdICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgIHZhciBwciA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHIubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcltpXSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnByb2R1Y3RzLnB1c2gocHJbaV0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIG1vcmUgZGF0YTogXCIsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJc3N1ZSBnZXRBbGxQcm9kdWN0cygpXCIpO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL31cclxuXHJcblxyXG5cclxuICAgICRzY29wZS5nb1RvU2lnblVwRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuY3VzdG9tZXJTdGVwLmZvcm1Jbml0ID0gdHJ1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc3RlcHMgPSBKU09OLnN0cmluZ2lmeSgkc2NvcGUuY3VzdG9tZXJTdGVwKTtcclxuICAgICAgICAkc3RhdGUuZ28oJ2Zvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJhY2tlbmRTZXJ2aWNlLCAkc3RhdGUsICRyb290U2NvcGUsICRsb2NhbFN0b3JhZ2UpIHtcclxuXHJcbiAgICAkc2NvcGUucGVuc2lvblByb2R1Y3RzID0gW107XHJcbiAgICAkc2NvcGUuaGlzdGFsbXV0UHJvZHVjdHMgPSBbXTtcclxuICAgICRzY29wZS5nZW1lbGhpc2Fob24gPSBbXTtcclxuXHJcbiAgICB2YXIgcGVuc2lvblByb2R1Y3QxID0ge1xyXG4gICAgICAgIFwibmFtZVwiOiBcItek16DXodeZ15RcIixcclxuICAgICAgICBcImNvbXBhbnlcIjogXCLXkNec15jXqdeV15zXqCDXqdeX151cIixcclxuICAgICAgICBcImltZ1wiOiBcImh0dHBzOi8veXQzLmdncGh0LmNvbS8tMkVPUTVmZ1Uwc1EvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQjA2SFg3MzB4NzgvczkwMC1jLWstbm8tbW8tcmotYzB4ZmZmZmZmL3Bob3RvLmpwZ1wiLFxyXG4gICAgICAgIFwienZpcmFcIjogXCIwLjVcIixcclxuICAgICAgICBcImhhZmthZGFcIjogXCIxLjhcIixcclxuICAgICAgICBcInByb2R1Y3RJZFwiOiBcIjFcIixcclxuXHJcbiAgICB9XHJcbiAgICB2YXIgcGVuc2lvblByb2R1Y3QyID0ge1xyXG4gICAgICAgIFwibmFtZVwiOiBcItek16DXodeZ15RcIixcclxuICAgICAgICBcImNvbXBhbnlcIjogXCLXpNeh15LXldeqXCIsXHJcbiAgICAgICAgXCJpbWdcIjogXCJodHRwOi8vd3d3LmVsaWRvci5jby5pbC9pbWFnZS5hc2h4P3M9MTcwMzU0JnNsPWhlJmltPTExMzUxMyZzdD1jXCIsXHJcbiAgICAgICAgXCJ6dmlyYVwiOiBcIjAuNlwiLFxyXG4gICAgICAgIFwiaGFma2FkYVwiOiBcIjEuOVwiLFxyXG4gICAgICAgIFwicHJvZHVjdElkXCI6IFwiMlwiLFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgaGlzaHRhbG11dFByb2R1Y3QxID0ge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIteU16nXqtec157XldeqXCIsXHJcbiAgICAgICAgXCJjb21wYW55XCI6IFwiSSBCIEkgXCIsXHJcbiAgICAgICAgXCJpbWdcIjogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzYvNjgvSUJJX0ludmVzdG1lbnRfSG91c2VfbG9nby5qcGdcIixcclxuICAgICAgICBcInp2aXJhXCI6IFwiMC41XCIsXHJcbiAgICAgICAgXCJoYWZrYWRhXCI6IFwiMFwiLFxyXG4gICAgICAgIFwicHJvZHVjdElkXCI6IFwiM1wiLFxyXG4gICAgfVxyXG4gICAgdmFyIGhpc2h0YWxtdXRQcm9kdWN0MiA9IHtcclxuICAgICAgICBcIm5hbWVcIjogXCLXlNep16rXnNee15XXqlwiLFxyXG4gICAgICAgIFwiY29tcGFueVwiOiBcItek16HXkteV16pcIixcclxuICAgICAgICBcImltZ1wiOiBcImh0dHA6Ly93d3cuZWxpZG9yLmNvLmlsL2ltYWdlLmFzaHg/cz0xNzAzNTQmc2w9aGUmaW09MTEzNTEzJnN0PWNcIixcclxuICAgICAgICBcInp2aXJhXCI6IFwiMC42XCIsXHJcbiAgICAgICAgXCJoYWZrYWRhXCI6IFwiMFwiLFxyXG4gICAgICAgIFwicHJvZHVjdElkXCI6IFwiNFwiLFxyXG4gICAgfVxyXG4gICAgdmFyIGhpc2h0YWxtdXRQcm9kdWN0MyA9IHtcclxuICAgICAgICBcIm5hbWVcIjogXCLXlNep16rXnNee15XXqlwiLFxyXG4gICAgICAgIFwiY29tcGFueVwiOiBcIteb15zXnFwiLFxyXG4gICAgICAgIFwiaW1nXCI6IFwiaHR0cDovL3d3dy5pc3NmLm9yZy5pbC93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMi9jbGFsLTQzMHgzMzAuanBnXCIsXHJcbiAgICAgICAgXCJ6dmlyYVwiOiBcIjAuNlwiLFxyXG4gICAgICAgIFwiaGFma2FkYVwiOiBcIjBcIixcclxuICAgICAgICBcInByb2R1Y3RJZFwiOiBcIjRcIixcclxuICAgIH1cclxuICAgIHZhciBoaXNodGFsbXV0UHJvZHVjdDQgPSB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwi15TXqdeq15zXnteV16pcIixcclxuICAgICAgICBcImNvbXBhbnlcIjogXCLXnteg15XXqNeUXCIsXHJcbiAgICAgICAgXCJpbWdcIjogXCJodHRwOi8vaW1hZ2VzLmdsb2Jlcy5jby5pbC9pbWFnZXMvTmV3R2xvYmVzL2JpZ19pbWFnZV84MDAvMjAxNS9NZW5vcmFNaXZ0YWNoaW0tQ01ZSy04MDAuanBnXCIsXHJcbiAgICAgICAgXCJ6dmlyYVwiOiBcIjAuNlwiLFxyXG4gICAgICAgIFwiaGFma2FkYVwiOiBcIjBcIixcclxuICAgICAgICBcInByb2R1Y3RJZFwiOiBcIjVcIixcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBnZW1lbFByb2R1Y3QxID0ge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIteS157XnFwiLFxyXG4gICAgICAgIFwiY29tcGFueVwiOiBcIkkgQiBJIFwiLFxyXG4gICAgICAgIFwiaW1nXCI6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy82LzY4L0lCSV9JbnZlc3RtZW50X0hvdXNlX2xvZ28uanBnXCIsXHJcbiAgICAgICAgXCJ6dmlyYVwiOiBcIjAuNVwiLFxyXG4gICAgICAgIFwiaGFma2FkYVwiOiBcIjBcIixcclxuICAgICAgICBcInByb2R1Y3RJZFwiOiBcIjZcIixcclxuICAgIH1cclxuICAgIHZhciBnZW1lbFByb2R1Y3QyID0ge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIteS157XnFwiLFxyXG4gICAgICAgIFwiY29tcGFueVwiOiBcItek16HXkteV16pcIixcclxuICAgICAgICBcImltZ1wiOiBcImh0dHA6Ly93d3cuZWxpZG9yLmNvLmlsL2ltYWdlLmFzaHg/cz0xNzAzNTQmc2w9aGUmaW09MTEzNTEzJnN0PWNcIixcclxuICAgICAgICBcInp2aXJhXCI6IFwiMC42XCIsXHJcbiAgICAgICAgXCJoYWZrYWRhXCI6IFwiMFwiLFxyXG4gICAgICAgIFwicHJvZHVjdElkXCI6IFwiN1wiLFxyXG4gICAgfVxyXG4gICAgdmFyIGdlbWVsUHJvZHVjdDMgPSB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwi15LXntecXCIsXHJcbiAgICAgICAgXCJjb21wYW55XCI6IFwi15vXnNecXCIsXHJcbiAgICAgICAgXCJpbWdcIjogXCJodHRwOi8vd3d3Lmlzc2Yub3JnLmlsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzEyL2NsYWwtNDMweDMzMC5qcGdcIixcclxuICAgICAgICBcInp2aXJhXCI6IFwiMC42XCIsXHJcbiAgICAgICAgXCJoYWZrYWRhXCI6IFwiMFwiLFxyXG4gICAgICAgIFwicHJvZHVjdElkXCI6IFwiOFwiLFxyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5wZW5zaW9uUHJvZHVjdHMucHVzaChwZW5zaW9uUHJvZHVjdDEpO1xyXG4gICAgJHNjb3BlLnBlbnNpb25Qcm9kdWN0cy5wdXNoKHBlbnNpb25Qcm9kdWN0Mik7XHJcblxyXG4gICAgJHNjb3BlLmhpc3RhbG11dFByb2R1Y3RzLnB1c2goaGlzaHRhbG11dFByb2R1Y3QxKTtcclxuICAgICRzY29wZS5oaXN0YWxtdXRQcm9kdWN0cy5wdXNoKGhpc2h0YWxtdXRQcm9kdWN0Mik7XHJcbiAgICAkc2NvcGUuaGlzdGFsbXV0UHJvZHVjdHMucHVzaChoaXNodGFsbXV0UHJvZHVjdDMpO1xyXG4gICAgJHNjb3BlLmhpc3RhbG11dFByb2R1Y3RzLnB1c2goaGlzaHRhbG11dFByb2R1Y3Q0KTtcclxuXHJcblxyXG5cclxuICAgICRzY29wZS5nZW1lbGhpc2Fob24ucHVzaChnZW1lbFByb2R1Y3QxKTtcclxuICAgICRzY29wZS5nZW1lbGhpc2Fob24ucHVzaChnZW1lbFByb2R1Y3QyKTtcclxuICAgICRzY29wZS5nZW1lbGhpc2Fob24ucHVzaChnZW1lbFByb2R1Y3QzKTtcclxufSIsIlxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQmFja2VuZFNlcnZpY2UsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAkc2NvcGUuZm9ybURhdGEgPSB7fTtcclxuICAgICRzdGF0ZS5nbygnZm9ybS5Vc2VySW5mbycpO1xyXG4gICAgLy8gZnVuY3Rpb24gdG8gcHJvY2VzcyB0aGUgZm9ybVxyXG4gICAgJHNjb3BlLnByb2Nlc3NGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFsZXJ0KCdhd2Vzb21lIScpO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQmFja2VuZFNlcnZpY2UsICRzdGF0ZSwgZGF0YVNlcnZpY2UsICRsb2NhbFN0b3JhZ2UsICRyb290U2NvcGUpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInNpZ24gdXAgaW5pdCBcIik7XHJcblxyXG4gICAgJHNjb3BlLnVzZXIgPSAkcm9vdFNjb3BlLnVzZXI7XHJcblxyXG5cclxuICAgICRzY29wZS5GaW5pc2hTdGVwT25lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UudXNlciA9IEpTT04uc3RyaW5naWZ5KCRzY29wZS51c2VyKTtcclxuICAgICAgICB2YXIgc3RlcHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RlcHNcIikpO1xyXG4gICAgICAgIHN0ZXBzLnN0ZXAxID0gdHJ1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc3RlcHMgPSBKU09OLnN0cmluZ2lmeShzdGVwcyk7XHJcbiAgICAgICAgJHJvb3RTY29wZS51c2VyID0gJHNjb3BlLnVzZXI7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdmb3JtLlVzZXJJbmZvUGFydDInKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJhY2tlbmRTZXJ2aWNlLCAkc3RhdGUsICRyb290U2NvcGUsICRsb2NhbFN0b3JhZ2UpIHtcclxuICAgICRzY29wZS51c2VyID0gJHJvb3RTY29wZS51c2VyO1xyXG5cclxuICAgICRzY29wZS5maXNuaWhTdGVwdHdvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNhdmVTdGF0ZSgyKTtcclxuICAgICAgICAkc3RhdGUuZ28oXCJmb3JtLmNob29zZVByb2R1Y3RcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVTdGF0ZShzdGVwbnVtYmVyKSB7XHJcbiAgICAgICAgJHJvb3RTY29wZS51c2VyID0gJHNjb3BlLnVzZXI7XHJcbiAgICAgICAgJGxvY2FsU3RvcmFnZS51c2VyID0gJHJvb3RTY29wZS51c2VyO1xyXG4gICAgICAgIHZhciBzdGVwcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdGVwc1wiKSk7XHJcbiAgICAgICAgc3RlcHMuc3RlcDIgPSB0cnVlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zdGVwcyA9IEpTT04uc3RyaW5naWZ5KHN0ZXBzKTtcclxuICAgIH1cclxuXHJcbn0iLCJhbmd1bGFyLm1vZHVsZSgnR2V0cGVuc2lhJywgWyd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ25nU3RvcmFnZSddKVxyXG4gICAgLy8gRGlyZWN0aXZlc1xyXG4gICAgLy8uZGlyZWN0aXZlKC4uLi4pXHJcblxyXG4gICAgLy8gU2VydmljZXNcclxuICAgIC5zZXJ2aWNlKCdBUEknLCByZXF1aXJlKCcuL3NlcnZpY2VzL2FwaS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ0JhY2tlbmRTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9CYWNrZW5kU2VydmljZS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ21lbnVTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9tZW51U2VydmljZS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ2RhdGFTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9kYXRhU2VydmljZS5qcycpKVxyXG5cclxuICAgIC8vIFJvdXRpbmdcclxuICAgIC5jb25maWcocmVxdWlyZSgnLi9jb25maWcvcm91dGVzLmpzJykpXHJcblxyXG4gICAgLy8gQ29udHJvbGxlcnNcclxuICAgIC5jb250cm9sbGVyKCdtYWluQ29udHJvbGxlcicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdsb2dpbicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdtYWluJywgZnVuY3Rpb24gKCkgeyB9KVxyXG4gICAgLmNvbnRyb2xsZXIoJ3VwbG9hZGNvbnRlbnQnLCBmdW5jdGlvbiAoKSB7IH0pXHJcbiAgICAuY29udHJvbGxlcignZGVwYXJ0bWVudCcsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdwcm9kdWN0JywgZnVuY3Rpb24gKCkgeyB9KVxyXG4gICAgLmNvbnRyb2xsZXIoJ3NpZ251cFN0ZXAxJywgZnVuY3Rpb24gKCkgeyB9KVxyXG5cclxuICAgIC5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcclxuICAgICAgICAkcm9vdFNjb3BlLnVzZXIgPSB7fTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhY2tlbmRfc2VydmljZSgkcSwgJGh0dHAsICRzdGF0ZSkge1xyXG5cclxuICAgIHRoaXMuZ2V0QWxsUHJvZHVjdHMgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Byb2R1Y3QvZ2V0cHJvZHVjdHMnLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgb24gZ2V0QWxsUHJvZHVjdHMnO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2dpbiA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYmFja2VuZF9zZXJ2aWNlIGxvZ2luJywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGluIGxvZ2luIFwiICwgZXJyKTtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgb24gbG9naW4nO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlciA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlci9yZWdpc3RlcicsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGluIHJlZ2lzdGVyIFwiLCBlcnIpO1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyBvbiByZWdpc3Rlcic7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEZhdm9yaXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VyL2Zhdm9yaXRlLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gR2V0RmF2b3JpdGUnO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRBbGxPcmRlcnMgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9vcmRlci9nZXRvcmRlcnMvJywgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgIC8vICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEFsbE9yZGVyc0J0Um90YXRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL29yZGVyL2dldG9yZGVycy8nLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgLy8gJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICBcclxuICAgIHRoaXMuR2V0QWxsUHJvZHVjdHNCeUNhdGVnb3J5TmFtZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL29yZGVyL2dldHByb2R1Y3RzY2F0ZWdvcnkvJywgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgIC8vICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL29yZGVyL2dldGNhdGVnb3JpZXMvJyArIGlkKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJpZ2dlckFjY291bnRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9vcmRlci90cmlnZ2VyYWNjb3VudGluZycpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGlsZSB0cmlnZ2VyIGFjY291bnRpbmcgJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRxLCAkaHR0cCkge1xyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZXJyZXMucmVqZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vY2soZnVuYywgdGltZW91dCkge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoZikge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGYoKSk7XHJcbiAgICAgICAgfSwgdGltZW91dCwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBCYXNpYyBmdW5jdGlvbnNcclxuICAgICAgICBHRVQ6IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCwgZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQT1NUOiBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KCdQT1NUJywgdXJsLCBkYXRhKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbnNcclxuICAgICAgICBnZXRXb3JrZXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIHJlcXVlc3QoJ0dFVCcsICcvYXBpL3dvcmtlci9hbGwnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1vY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9ianMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ianMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IGNoYW5jZS5maXJzdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lcklkOiBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHN0YXRlKSB7XHJcblxyXG4gICAgdGhpcy5wcm9kdWN0RGF0YSA9IHsgfTtcclxuXHJcbiAgICB0aGlzLnByb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdERhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0UHJpY2UgPSBmdW5jdGlvbiAocHJpY2UpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3REYXRhLnByaWNlID0gcHJpY2U7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5nZXRQcmljZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGF0YS5wcmljZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXROYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3REYXRhLm5hbWUgPSBuYW1lO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGF0YS5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldEluZm8gPSBmdW5jdGlvbiAoaW5mbykge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdERhdGEuaW5mbyA9IGluZm87XHJcbiAgICB9O1xyXG4gICAgdGhpcy5nZXRJbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3REYXRhLmluZm87XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0UGljID0gZnVuY3Rpb24gKHBpYykge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdERhdGEucGljID0gcGljO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0UGljID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3REYXRhLmluZm87XHJcbiAgICB9O1xyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzdGF0ZSkge1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImQxMjNcIik7XHJcblxyXG4gICAgdGhpcy50ZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdvVG9kZXBhcnRtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnZGVwYXJ0bWVudCcpO1xyXG4gICAgfVxyXG4gICAgLy8kc2NvcGUuZ29Ub0RlcGFydG1lbnQgPSAgZnVuY3Rpb24oKVxyXG4gICAgLy97XHJcbiAgICAvLyAgICAkc3RhdGUuZ28oJ2RlcGFydG1lbnQnKTtcclxuICAgIC8vfVxyXG59Il19
