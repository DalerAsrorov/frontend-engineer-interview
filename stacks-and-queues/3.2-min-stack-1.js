const Stack = require('./Stack');

class MinStack2 {
    constructor() {
        this.stack = new Stack();
        this.min = Infinity;
    }

    pop() {
        let peek = this.stack.pop();
        if (peek === this.min) {
            this.min = this.stack.pop();
        }
    }

    push(x) {
        if (x <= this.min) {
            this.stack.push(this.min);
            this.min = x;
        }

        this.stack.push(x);
    }

    /**
     * Returns the min element
     */
    getMin() {
        return this.min;
    }

    top() {
        this.stack.peek();
    }

    isEmpty() {
        this.stack.isEmpty();
    }

    print() {
        this.stack.print();
    }
}

function main() {
    let minStack = new MinStack2();
    minStack.push(2);
    minStack.push(0);
    minStack.push(3);
    minStack.push(4);
    minStack.getMin();
    minStack.pop();
    minStack.getMin();
    minStack.pop();
    minStack.getMin();
    minStack.pop();
    let min = minStack.getMin();
}

main();

module.exports = MinStack2;