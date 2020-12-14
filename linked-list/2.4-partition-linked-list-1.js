/**
 * Partition: write a code to partition a linked list around a value x, such that all nodes less than x comes
 * before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
 * to be after the elements than x (see below). The partition element x can appear anywhere in the *right position*;
 * it does not neede to appear between the left and right partitions.
 * Example
 * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
 * Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */
const { convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');
const ListNode = require('./linked-list');

const partitionLinkedList = (head, x) => {
    let dummyLeftHead = new ListNode(0);
    let dummyRightHead = new ListNode(0);
    let dummyLeft = dummyLeftHead;
    let dummyRight = dummyRightHead;

    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }

    while (head) {
        if (head.data < x) {
            dummyLeft.next = head;
            dummyLeft = dummyLeft.next;
        } else {
            dummyRight.next = head;
            dummyRight = dummyRight.next;
        }
        head = head.next;
    }

    dummyRight.next = null;
    dummyLeft.next = dummyRightHead.next;

    return dummyLeftHead.next;
};

const arr = [3, 5, 8, 5, 10, 2, 1];
const llist = convertArrayToLinkedList(arr); // [3,2,1,5,8,5,10]

const partitionedList = partitionLinkedList(llist, 5);
printLinkedList(partitionedList);
