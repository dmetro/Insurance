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