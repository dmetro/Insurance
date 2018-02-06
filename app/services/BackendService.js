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