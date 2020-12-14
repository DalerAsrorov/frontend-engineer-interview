/**
 * A
 */

console.log('A');
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


/**
 * B
 */

// What does this code return?

console.log('B');
var Foo = function (a) {
    this.bar = () => {
        return a;
    };

    var baz = function () {
        return a;
    };
};

Foo.prototype = {
    biz: () => {
        return this.bar();
    }
};

var f = new Foo(7);
f.bar(); //=> 7
f.baz(); //=> Error: f.baz is not a function - since it's a private function
f.biz(); //=> Error: this.bar is not a function - will not find the method
// because it uses the arrow function which refers to the parent scope (global scope)