var X = function (someValue) {
    this.hello = function () {
        return someValue;
    };

};

X.prototype.test = function () {
    return this.someValue;
};

var x = new X("hi");

// ------what will the following code return?
console.log(x.hello()); // "hi"
console.log(x.test()); // undefined