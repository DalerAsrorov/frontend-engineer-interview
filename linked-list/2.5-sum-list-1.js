/**
 * Sum Lists: You have two numbers represented by a linked list, where each node contains
 * a single digit. The digits are stored in reverse order, such that the 1's digit
 * is at the head of the list. Write a function that adds the two numbers and returns
 * the sum as a linked list.
 */
const { convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');
const ListNode = require('./linked-list');

const sumLists = (l1, l2) => {
    let result = new ListNode(0);
    let resultLast = result;
    let carry = 0;

    while (l1 != null || l2 != null) {
        let x = l1 != null ? l1.data : 0;
        let y = l2 != null ? l2.data : 0;
        let sum = x + y + carry;

        carry = Math.floor(sum / 10);

        resultLast.next = new ListNode(sum % 10);
        resultLast = resultLast.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry > 0) {
        resultLast.next = new ListNode(1);
    }

    return result.next;
};

const l1 = convertArrayToLinkedList([9, 9]);
const l2 = convertArrayToLinkedList([9]);

const sumOfLists = sumLists(l1, l2);

// printLinkedList(l1);
// printLinkedList(l2);
printLinkedList(sumOfLists);
