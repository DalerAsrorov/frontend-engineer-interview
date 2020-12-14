const ListNode = require('./linked-list');
const llUtils = require('./linked-list-utils');

const arr = [5, 2, 1, 1, 1, 1, 2, 4];
const lList = llUtils.convertArrayToLinkedList(arr);

const removeDups = (lList) => {
    let map = new Map();
    let prev = null;

    while (lList) {
        if (map.has(lList.data)) {
            prev.next = lList.next;
        } else {
            map.set(lList.data, 1);
            prev = lList;
        }
        lList = lList.next;
    }
};

llUtils.printLinkedList(lList);
removeDups(lList);
llUtils.printLinkedList(lList);

