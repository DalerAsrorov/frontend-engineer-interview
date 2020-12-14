/**
 * Sum Lists: You have two numbers represented by a linked list, where each node contains
 * a single digit. The digits are stored in reverse order, such that the 1's digit
 * is at the head of the list. Write a function that adds the two numbers and returns
 * the sum as a linked list.
 */
const { convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');
const ListNode = require('./linked-list');

const sumLists = (l1, l2) => {
    let remainder = 0;
    let n1 = l1;
    let n2 = l2;
    let sumNodeHead = new ListNode(0);
    let sumNodeLast = sumNodeHead;

    while (n1 && n2) {
        let sum = n1.data + n2.data + remainder;
        remainder = Math.floor(sum / 10);
        sum = remainder === 1 ? sum % 10 : sum;
        sumNodeLast.next = new ListNode(sum);

        sumNodeLast = sumNodeLast.next;
        n1 = n1.next;
        n2 = n2.next;
    }

    if (n1) {
        while (n1) {
            let sum = n1.data + remainder;
            remainder = Math.floor(sum / 10);
            sum = sum % 10;
            sumNodeLast.next = new ListNode(sum);

            sumNodeLast = sumNodeLast.next;
            n1 = n1.next;
        }
    } else if (n2) {
        while (n2) {
            let sum = n2.data + remainder;
            remainder = Math.floor(sum / 10);
            sum = sum % 10;
            sumNodeLast.next = new ListNode(sum);

            sumNodeLast = sumNodeLast.next;
            n2 = n2.next;
        }
    }

    if (remainder) {
        sumNodeLast.next = new ListNode(remainder);
    }

    return sumNodeHead.next;
};

const l1 = convertArrayToLinkedList([9, 9]);
const l2 = convertArrayToLinkedList([9]);

const sumOfLists = sumLists(l1, l2);

// printLinkedList(l1);
// printLinkedList(l2);
printLinkedList(sumOfLists);
