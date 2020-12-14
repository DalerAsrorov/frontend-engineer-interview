// Run the functions in the tasks collection in series, each one running once the previous
// function has completed. If any functions in the series pass an error to its callback,
// no more functions are run and callback is immediately called with the value of the error.
// Otherwise, callback receives an array of results when tasks have completed.

let async = {
    series(taskSeries, callback) {
        let taskList = Array.isArray(taskSeries) ? taskSeries : Object.values(taskSeries);
        let results = [];

        const runner = (tasks, done) => {
            if (tasks.length) {
                let task = tasks.shift();

                const cb = (err, result) => {
                    results.push(result);

                    if (err) {
                        done(err, results);
                    } else {
                        runner(tasks, done);
                    }
                };

                task(cb);
            } else {
                done(null, results);
            }
        };

        runner(taskList, callback);
    },
    parallel(taskSeries, callback) {
        let taskList = Array.isArray(taskSeries) ? taskSeries : Object.values(taskSeries);
        let results = [];
        let isFinished = false;
        let count = 0;

        let _callback = (index, err, result) => {
            count++;
            results[index] = result;

            if (!isFinished && (err || results.length === count)) {
                callback(err, results);
                isFinished = true;
                return;
            }
        };

        taskList.forEach((task, i) => {
            task((err, result) => _callback(i, err, result));
        });
    }
};

async.series([
    function one(callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 1500);
    },
    function two(callback) {
        setTimeout(function () {
            callback(null, 2);
        }, 500);
    }
], function (err, results) {
    // results is now equal to: {one: 1, two: 2}
    console.log(results);
});

async.parallel([
    function one(callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 1500);
    },
    function two(callback) {
        setTimeout(function () {
            callback(null, 2);
        }, 500);
    }
], function (err, results) {
    // results is now equal to: {one: 1, two: 2}
    console.log(results);
});

