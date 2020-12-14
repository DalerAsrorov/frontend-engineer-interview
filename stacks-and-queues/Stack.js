const ListNode = require('./ListNode');

class Stack {
    constructor() {
        this.top = null; // ListNode
    }

    pop() {
        if (this.top === null) {
            return null;
        }
        let val = this.top.val;
        this.top = this.top.next;
        return val;
    }

    push(val) {
        let newNode = new ListNode(val);
        newNode.next = this.top;
        this.top = newNode;
    }

    peek() {
        if (this.top === null) {
            return null;
        }
        return this.top.val;
    }

    print() {
        let curr = this.top;

        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }

    isEmpty() {
        return this.top === null;
    }
}

module.exports = Stack;