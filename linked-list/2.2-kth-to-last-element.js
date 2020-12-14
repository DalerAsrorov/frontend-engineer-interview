// Original List : ->1->2->8->3->7->0->4
// Output : 3rd Element from the end is : 7
const ListNode = require('./linked-list');
const { convertArrayToLinkedList } = require('./linked-list-utils');

const getKthToLastElement = (head, k) => {
    let len = 0;
    let node = head;

    while (node !== null) {
        node = node.next;
        len++;
    }

    if (len < n) {
        return null;
    }

    node = head;
    let i = 0;
    while (i < len - k) {
        node = node.next;
        i++;
    }

    return node.data;
};

const arr = [1, 2, 8, 3, 7, 0, 4];
const n = convertArrayToLinkedList(arr);

console.log(getKthToLastElement(n, 7));