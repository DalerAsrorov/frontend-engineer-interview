const ListNode = require('./linked-list');
const { convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');

function insertIntoASortedList(head, data) {
    let curr = head;
    let prev = head;

    if (head.data > data) {
        let newHead = new ListNode(data);
        newHead.next = head;
        head = newHead;
        return;
    }

    while (curr.next) {
        curr = curr.next;

        if (curr.data > data && prev.data <= data) {
            let newNode = new ListNode(data);
            prev.next = newNode;
            newNode.next = curr;
        }
        prev = curr;
    }

    if (prev.data <= data) {
        prev.next = new ListNode(data);
    }
}

const arr = [1, 2, 8, 8, 8, 3, 6, 7, 4].sort();
const linkedList = convertArrayToLinkedList(arr);

printLinkedList(linkedList); // before
insertIntoASortedList(linkedList, 4);
printLinkedList(linkedList); // after