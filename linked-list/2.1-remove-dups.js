const ListNode = require('./linked-list');
const llUtils = require('./linked-list-utils');

const arr = [5, 2, 1, 1, 2, 3, 1, 4, 3, 5, 1];
const lList = llUtils.convertArrayToLinkedList(arr);

const removeDups = (lList) => {
    let map = new Map();
    let currHead = lList;
    let dummyHead = new ListNode(-1);
    let dummyNode = dummyHead;

    while (currHead) {
        if (!map.has(currHead.data)) {
            map.set(currHead.data, 1);
            dummyNode.next = new ListNode(currHead.data);
            dummyNode = dummyNode.next;
        }
        currHead = currHead.next;
    }

    dummyHead = dummyHead.next;
    return dummyHead;
};

llUtils.printLinkedList(lList);
let newLinkedList = removeDups(lList);
llUtils.printLinkedList(newLinkedList);

