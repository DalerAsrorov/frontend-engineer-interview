/**
 * Sum Lists: You have two numbers represented by a linked list, where each node contains
 * a single digit. The digits are stored in reverse order, such that the 1's digit
 * is at the head of the list. Write a function that adds the two numbers and returns
 * the sum as a linked list.
 */
const { convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');
const ListNode = require('./linked-list');

const isPalindromeList = (list) => {
    let stack = [];
    let node = list;

    while (node) {
        stack.push(node.data);
        node = node.next;
    }

    node = list;
    while (node) {
        let last = stack.pop();
        if (node.data !== last) {
            return false;
        }
        node = node.next;
    }

    return true;
};

const linkedList = convertArrayToLinkedList([1, 2, 3, 2, 1]);
const isPalindrome = isPalindromeList(linkedList);

// printLinkedList(l1);
// printLinkedList(l2);
console.log(isPalindrome);
