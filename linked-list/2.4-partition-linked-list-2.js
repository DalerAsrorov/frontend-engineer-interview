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
    let beforeStart = null;
    let beforeEnd = null;
    let afterStart = null;
    let afterEnd = null;

    while (head != null) {
        let next = head.next;
        head.next = null;
        if (head.data < x) {
            if (beforeStart == null) {
                beforeStart = head;
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = head;
                beforeEnd = head;
            }
        } else {
            if (afterStart == null) {
                afterStart = head;
                afterEnd = afterStart;
            } else {
                afterEnd.next = head;
                afterEnd = head;
            }
        }
        head = next;
    }

    if (beforeStart == null) {
        return afterStart;
    }

    // merge before list and after list
    beforeEnd.next = afterStart;
    return beforeStart;
};

const arr = [3, 5, 8, 5, 10, 2, 1];
const llist = convertArrayToLinkedList(arr); // [3,2,1,5,8,5,10]

const partitionedList = partitionLinkedList(llist, 5);
printLinkedList(partitionedList);
