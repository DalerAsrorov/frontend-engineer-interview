// A simple promise implementation

class MyPromise {
    constructor(execFunc) {
        this.actions = [];
        this.errorCb = null;

        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);

        execFunc(this.onResolve, this.onReject);
    }

    catch(errCb) {
        this.actions = [];
        this.errorCb = errCb;

        return this;
    }

    then(action) {
        this.actions.push(action);

        return this;
    }

    onResolve(data) {
        if (!this.actions.length) {
            return;
        }

        const firstAction = this.actions.shift();
        let result = firstAction(data);

        return this.actions.forEach((action) => {
            result = action(result);
        });
    }

    onReject(err) {
        return this.errorCb(err);
    }
}

const createPromise = (data, shouldError) => new MyPromise((res, rej) => {
    setTimeout(() => {
        if (shouldError) {
            rej('Ooops, something went wrong.');
        }

        res(data);
    }, 1000);
});

createPromise({ name: 'Bob' }).then(data => {
    return {
        ...data,
        lastName: 'Foo'
    };
}).then(data => ({
    ...data,
    dob: '11/14/1995'
})).then(fullInfo => {
    // { fullInfo: { name: 'Bob', lastName: 'Foo', dob: '11/14/1995' } }
    console.log({ fullInfo });
});

createPromise('hello world', true)
    .then((data) => {
        console.log('Here is the data', data);
    })
    .catch((err) => {
        console.log('Error: ', err);
    });
