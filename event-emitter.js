class MyEmitter {
    constructor() {
        this.eventMap = new Map(); // eventName => array of actions
    }
    on(eventName, fn) {
        this.eventMap.set(eventName, [...(this.eventMap.get(eventName) || []), fn]);
    }
    emit(eventName, ...args) {
        this.eventMap.get(eventName).forEach(eventAction => {
            eventAction.call(this, ...args);
        });
    }
}

const myEmitter = new MyEmitter();
myEmitter.on('event', function (a, b) {
    console.log(a, b, this, this === myEmitter);
    // Prints:
    //   a b MyEmitter {
    //     domain: null,
    //     _events: { event: [Function] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined } true
});
myEmitter.emit('event', 'a', 'b');