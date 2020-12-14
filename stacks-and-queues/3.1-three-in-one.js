/**
 * How would you use a single array to implement three stacks
 */

class ThreeStacksWithOneArray {
    constructor(stackSize = 10) {
        this.numberOfStacks = 3;
        this.capacity = stackSize;
        this.values = new Array(stackSize * this.numberOfStacks).fill().map(() => null);
        this.sizes = new Array(this.numberOfStacks).fill().map(() => 0);
    }

    // stackNum could be 1, 2, 3
    push(stackNum, val) {
        if (this.isFull(stackNum)) {
            console.error(`There is no space for stack ${stackNum}`);
            return null;
        }
        this.sizes[stackNum] += 1;
        this.values[this.getTopIndex(stackNum)] = val;
    }

    pop(stackNum) {
        if (this.isEmpty(stackNum)) {
            return null;
        }
        const topIndex = this.getTopIndex(stackNum);
        const value = this.values[topIndex];
        this.values[topIndex] = 0;
        this.sizes[stackNum] -= 1;
        return value;
    }

    peek(stackNum) {
        if (this.isEmpty(stackNum)) {
            return null;
        }
        return this.values[this.getTopIndex(stackNum)];
    }

    getTopIndex(stackNum) {
        const offset = stackNum * this.capacity;
        const size = this.sizes[stackNum];
        return offset + size - 1;
    }

    isEmpty(stackNum) {
        return this.sizes[stackNum] === 0;
    }

    isFull(stackNum) {
        return this.sizes[stackNum] === this.capacity;
    }

    print(stackNum) {
        const size = this.sizes[stackNum];
        const offset = stackNum * this.capacity;

        for (let i = offset; i < offset + size; i++) {
            console.log(this.values[i]);
        }
    }
}


function main() {
    let mulStack = new ThreeStacksWithOneArray(10);

    try {
        //Adding to those three stacks
        mulStack.push(0, 11);
        mulStack.push(0, 12);
        mulStack.push(0, 13);
        mulStack.push(0, 14);
        mulStack.push(1, 21);
        mulStack.push(1, 22);
        mulStack.push(2, 31);
        mulStack.push(2, 32);
        mulStack.print(0);
        mulStack.print(1);
        mulStack.print(2);
        //Popping from those three stacks
        mulStack.pop(0);
        mulStack.pop(1);
        mulStack.pop(2);
        mulStack.print(0);
        mulStack.print(1);
        mulStack.print(2);

    } catch (e) {
        console.log('Exception:', e);
    }
}

main();