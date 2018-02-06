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