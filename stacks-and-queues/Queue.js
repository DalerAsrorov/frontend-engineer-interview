const ListNode = require('./ListNode');

class Queue {
    constructor() {
        this.first = null; // ListNode
        this.last = null; // ListNode
    }

    add(val) {
        let newNode = new ListNode(val);
        if (last !== null) {
            this.last.next = newNode;
        }
        this.last = newNode;
        if (this.first === null) {
            this.first = this.last;
        }
    }

    remove() {
        if (this.first === null) {
            return null;
        }
        let node = this.first;
        this.first = node.next;

        if (this.first === null) {
            this.last = null;
        }

        return node.val;
    }

    peek() {
        if (this.first === null) {
            return null;
        }
        return this.first.val;
    }

    isEmpty() {
        return this.first === null;
    }
}

module.exports = Queue;