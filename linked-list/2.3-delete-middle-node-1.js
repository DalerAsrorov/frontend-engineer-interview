const ListNode = require('./linked-list');
const { getMidNode, convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');

const deleteMidNode = (head) => {
    if (head === null) {
        return null;
    } else if (head.next === null) {
        return null;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = prev.next.next;
};

const arr = [1, 2, 8, 3, 7, 0, 4];
const llist = convertArrayToLinkedList(arr);

deleteMidNode(getMidNode(llist));

// printLinkedList(llist);
