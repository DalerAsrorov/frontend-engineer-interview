// Original List : ->1->2->8->3->7->0->4
// Output : 3rd Element from the end is : 7
const ListNode = require('./linked-list');
const { convertArrayToLinkedList } = require('./linked-list-utils');

const getKthToLastElement = (head, k) => {
    let p1 = head;
    let p2 = head;

    for (let i = 0; i < k; i++) {
        // k is out of bounds
        if (!p1) {
            return null;
        }
        p1 = p1.next;
    }

    while (p1) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2.data;
};


const arr = [1, 2, 8, 3, 7, 0, 4];
const n = convertArrayToLinkedList(arr);

console.log(getKthToLastElement(n, 2));