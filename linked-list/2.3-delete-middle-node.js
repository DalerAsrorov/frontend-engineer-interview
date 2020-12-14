const ListNode = require('./linked-list');
const { getMidNode, convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');

const deleteMiddleNode = (midNode) => {
    midNode.data = midNode.next.data;
    midNode.next = midNode.next.next;
};

const arr = [1, 2, 8, 3, 7, 0, 4];
const llist = convertArrayToLinkedList(arr);
const midNode = getMidNode(llist, arr.length);

deleteMiddleNode(midNode);

printLinkedList(llist);

