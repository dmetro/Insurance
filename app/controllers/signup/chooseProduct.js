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