
// Implement a throttler that executes an array of tasks. When the throttler is passed a number,
// only execute that number of the tasks and passes the other tasks into a queue.

const taskCreater = (taskId, delay) => (callback) => {
    console.log(`Started task ${taskId}`);
    setTimeout(() => {
        callback(taskId);
    }, delay);
};

class Runner {
    constructor(maxTasks) {
        this.maxTasks = maxTasks;
        this.queue = [];
        this.runningCount = 0;
    }

    _run() {
        while (this.queue.length && this.runningCount < this.maxTasks) {
            this.runningCount += 1;
            let taskFn = this.queue.shift();
            taskFn((taskId) => {
                console.log(`Finished task ${taskId}`);
                this.runningCount -= 1;
                this._run();
            });
        }
    }

    push(taskFunc) {
        this.queue.push(taskFunc);
        this._run();
    }
}


const task1 = taskCreater('1', 2000);
const task2 = taskCreater('2', 2000);
const task3 = taskCreater('3', 2000);
const task4 = taskCreater('4', 2000);
// const task5 = taskCreater('5', 1500);
// const task6 = taskCreater('6', 1000);

let runner = new Runner(3);
runner.push(task1);
runner.push(task2);
runner.push(task3);
runner.push(task4);
// runner.push(task5);
// setTimeout(() => {
//     runner.push(task6);
// }, 2000);