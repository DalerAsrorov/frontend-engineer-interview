/**
 * Sum Lists: You have two numbers represented by a linked list, where each node contains
 * a single digit. The digits are stored in reverse order, such that the 1's digit
 * is at the head of the list. Write a function that adds the two numbers and returns
 * the sum as a linked list.
 */
const { convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');
const ListNode = require('./linked-list');

function reverseLinkedList(head) {
    let current = head;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
}

function sumTwoLists(l1, l2) {
    let last1 = l1;
    let last2 = l2;
    let carry = 0;
    let result = new ListNode(-1);
    let resultLast = result;

    while (last1 || last2) {
        const x = last1 ? last1.data : 0;
        const y = last2 ? last2.data : 0;

        const sum = x + y + carry;

        carry = Math.floor(sum / 10);
        resultLast.next = new ListNode(sum % 10);

        resultLast = resultLast.next;
        last1 = last1 ? last1.next : null;
        last2 = last2 ? last2.next : null;
    }

    if (carry) {
        resultLast.next = new ListNode(1);
    }

    return result.next;
}


const sumLists = (l1, l2) => {
    l1 = reverseLinkedList(l1);
    l2 = reverseLinkedList(l2);

    return reverseLinkedList(sumTwoLists(l1, l2));
};

const l1 = convertArrayToLinkedList([7, 2, 4, 3]);
const l2 = convertArrayToLinkedList([5, 6, 4]);

const sumOfLists = sumLists(l1, l2);

// printLinkedList(l1);
// printLinkedList(l2);
printLinkedList(sumOfLists);
