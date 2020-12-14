// Implementation of a singly LinkedList
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    appendToTail(data) {
        let end = new ListNode(data);
        let n = this;

        while (n.next !== null) {
            n = n.next;
        }
        n.next = end;
    }
}

module.exports = ListNode;