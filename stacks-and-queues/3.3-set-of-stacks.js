const Stack = require('./Stack');

class SetOfStacks {
    constructor(maxCapacity) {
        this.listOfStacks = [new Stack()];
        this.maxCapacity = maxCapacity;
        this.sizes = new Array(1).fill().map(() => 0);
        this.lastAvailableStackIndex = 0;
    }

    _getLastAvailable() {
        return this.listOfStacks[this.lastAvailableStackIndex];
    }

    push(item) {
        let lastAvailableStack = this._getLastAvailable();

        if (this.sizes[this.lastAvailableStackIndex] === this.maxCapacity) {
            lastAvailableStack = new Stack();
            this.listOfStacks.push(lastAvailableStack);
            this.lastAvailableStackIndex += 1;
            this.sizes.push(0);
        }

        lastAvailableStack.push(item);
        this.sizes[this.lastAvailableStackIndex] += 1;
    }

    pop() {
        let lastAvailableStack = this._getLastAvailable();

        let lastElement = lastAvailableStack.pop();
        this.sizes[this.lastAvailableStackIndex] = this.sizes[this.lastAvailableStackIndex] > 0
            ? this.sizes[this.lastAvailableStackIndex] - 1
            : 0;

        if (!lastElement) {
            return null;
        }

        if (this.sizes[this.lastAvailableStackIndex] === 0 && this.lastAvailableStackIndex > 0) {
            this.sizes.pop();
            this.listOfStacks.pop();
            this.lastAvailableStackIndex -= 1;
        }

        return lastElement;
    }

    printAll() {
        console.log('~~~~~~~~~~~~');
        for (let [i, stack] of this.listOfStacks.entries()) {
            console.log(`Stack: ${i}`);
            stack.print();
        }
        console.log('~~~~~~~~~~~~');
    }
}


main();

function main() {
    const n = 3;
    let setOfStacks = new SetOfStacks(n);

    setOfStacks.push('one');
    setOfStacks.push('two');
    setOfStacks.printAll();

    setOfStacks.pop();
    setOfStacks.printAll();
}

module.exports = SetOfStacks;