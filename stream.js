// Create a basic implementation of a streams API. The user should be able to push values to a stream,
// and subscribe to values that are pushed to that stream.

// For example,

class Stream {
    constructor() {
        this.subscriptions = [];
        this.mappedActions = [];
    }

    subscribe(callback) {
        this.subscriptions.push(callback);
    }

    map(actionFunc) {
        this.mappedActions.push(actionFunc);

        return this;
    }

    push(opValue) {
        this.subscriptions.forEach(cb => {
            if (this.mappedActions.length) {
                this.mappedActions.forEach(action => {
                    cb(action.call(this, opValue));
                });
            } else {
                cb(opValue);
            }
        });
    }
}

console.log('A');
const z = new Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value + 10));
z.subscribe((value) => console.log(value + 20));
z.push(3);

// Expected output:
// 3
// 13
// 23

// a -------1------2----3
// map -----\------\----\
// b --------2------4----6

console.log('\nB');

const a = new Stream();
const b = a.map(value => value * 1 / 2);
const c = b.map(value => value * 3);

c.subscribe(console.log);

c.push(1);
c.push(2);
c.push(3);

// expected output on console:
// 0.5
// 3
// 1
// 6
// 1.5
// 9