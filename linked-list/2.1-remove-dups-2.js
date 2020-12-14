const ListNode = require('./linked-list');
const llUtils = require('./linked-list-utils');

const removeDups = (lList) => {
    let current = lList;

    while (current) {
        let runner = current;
        while (runner.next) {
            if (runner.next.data === current.data) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }
};

const arr = [5, 2, 2, 1, 1, 2, 8, 1, 1, 1, 2, 4, 8];
const lList = llUtils.convertArrayToLinkedList(arr);

llUtils.printLinkedList(lList);
removeDups(lList);
llUtils.printLinkedList(lList);

