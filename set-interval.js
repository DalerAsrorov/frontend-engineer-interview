const _setInterval = (callback, delay) => {
    const timerRef = { id: null };
    const timeout = () => {
        timerRef.id = setTimeout(() => {
            callback();
            timeout();
        }, delay);
    };
    timeout();
    return timerRef;
};

const timerRef = _setInterval(() => {
    console.log("Callback", 1);
}, 1000);
const timerRef2 = _setInterval(() => {
    console.log("Callback", 2);
}, 1000);

setTimeout(() => {
    clearTimeout(timerRef.id);
}, 5000);

setTimeout(() => {
    clearTimeout(timerRef2.id);
}, 7000);