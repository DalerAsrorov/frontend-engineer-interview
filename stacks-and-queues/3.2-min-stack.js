const ListNode = require('./ListNode');

class MinStack {
    constructor() {
        this.top = null; // ListNode
        this.minElement = Infinity;
    }

    pop() {
        if (this.top === null) {
            return null;
        }
        let node = this.top;
        this.top = node.next;

        if (this.minElement === node.val) {
            this.minElement = Infinity;
            let curr = this.top;
            while (curr) {
                if (curr.val < this.minElement) {
                    this.minElement = curr.val;
                }
                curr = curr.next;
            }
        }

        return node.val;
    }

    push(val) {
        let node = new ListNode(val);
        node.next = this.top;
        this.top = node;

        if (this.minElement > val) {
            this.minElement = val;
        }
    }

    /**
     * Returns the min element
     */
    min() {
        return this.minElement;
    }

    peek() {
        if (this.top === null) {
            return null;
        }
        return this.top.val;
    }

    isEmpty() {
        return this.top === null;
    }

    print() {
        let curr = this.top;

        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

function main() {
    let minStack = new MinStack();
    minStack.push(2);
    // minStack.push(0);
    // minStack.push(3);
    // minStack.push(4);
    // minStack.min();
    // minStack.pop();
    // minStack.min();
    // minStack.pop();
    // minStack.min();
    // minStack.pop();
    let min = minStack.min();

    minStack.print();
}

main();

module.exports = MinStack;