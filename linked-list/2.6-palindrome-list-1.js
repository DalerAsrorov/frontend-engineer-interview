/**
 * Sum Lists: You have two numbers represented by a linked list, where each node contains
 * a single digit. The digits are stored in reverse order, such that the 1's digit
 * is at the head of the list. Write a function that adds the two numbers and returns
 * the sum as a linked list.
 */
const { convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');
const ListNode = require('./linked-list');

function reverseAndClone(list) {
    let head = null;
    let node = list;

    while (node) {
        let newNode = new ListNode(node.data);
        newNode.next = head;
        head = newNode;
        node = node.next;
    }

    return head;
}

function areEqual(l1, l2) {
    while (l1 && l2) {
        if (l1.data != l2.data) {
            return false;
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    return l1 == null && l2 == null;
}

const isPalindromeList = (list) => {
    const reversed = reverseAndClone(list);

    return areEqual(reversed, list);
};

const linkedList = convertArrayToLinkedList([2, 1, 1, 2]);
const isPalindrome = isPalindromeList(linkedList);

// printLinkedList(l1);
// printLinkedList(l2);
console.log(isPalindrome);
