// Create a basic implementation of a streams API. The user should be able to push values to a stream,
// and subscribe to values that are pushed to that stream.

// For example,

// Create a basic implementation of a streams API. The user should be able to push values to a stream,
// and subscribe to values that are pushed to that stream.

// For example,

class Stream {
    constructor() {
        this.subscriptions = [];
        this.action = this._defaultAction;
    }

    subscribe(callback) {
        this.subscriptions.push(callback);
    }

    map(operationFunc) {
        this.action = operationFunc;

        return this;
    }

    push(opValue) {
        this.subscriptions.forEach(cb => {
            cb(this.action.call(this, opValue));
        });
    }

    _defaultAction(value) {
        return value;
    }
}

console.log('A');
const z = new Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
z.push(2);

// a -------1------2----3
// map -----\------\----\
// b --------2------4----6

console.log('\nB');

const a = new Stream();
const b = a.map(value => value * 2);

b.subscribe(console.log);

a.push(1);
a.push(2);
a.push(3);

// expected output on console:
// 2
// 4
// 6