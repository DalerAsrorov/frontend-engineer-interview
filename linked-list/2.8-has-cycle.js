const { convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');
const ListNode = require('./linked-list');

const hasCycle = function (head) {
    let slow = null;
    let fast = head;

    if (!head) {
        return false;
    }

    while (fast && fast.next) {
        if (slow === fast) {
            return true;
        }
        if (!slow) {
            slow = head;
        } else {
            slow = slow.next;
        }

        fast = fast.next.next;
    }

    return false;
};

const l1 = convertArrayToLinkedList([1, 9, 1, 2, 4]);
let last = l1;

while (last.next) {
    last = last.next;
}

last.next = l1;
const doesHaveCycle = hasCycle(l1);

console.log(doesHaveCycle);
