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
    let dummyLeft = new ListNode(0);
    let dummyLeftHead = dummyLeft;
    let dummyRight = new ListNode(0);
    let dummyRightHead = dummyRight;

    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }

    while (head) {
        if (head.data < x) {
            dummyLeftHead.next = new ListNode(head.data);
            dummyLeftHead = dummyLeftHead.next;
        } else {
            dummyRightHead.next = new ListNode(head.data);
            dummyRightHead = dummyRightHead.next;
        }
        head = head.next;
    }

    dummyLeft = dummyLeft.next;
    dummyRight = dummyRight.next;
    dummyLeftHead.next = dummyRight;
    return dummyLeft ? dummyLeft : dummyRight;
};

const arr = [3, 5, 8, 5, 10, 2, 1];
const llist = convertArrayToLinkedList(arr); // [3,2,1,5,8,5,10]

const partitionedList = partitionLinkedList(llist, 5);
printLinkedList(partitionedList);
