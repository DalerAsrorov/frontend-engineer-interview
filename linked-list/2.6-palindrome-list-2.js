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
    let fast = list;
    let slow = list;

    while (fast && fast.next) {
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }

    // if there is an odd number of elements in the list
    // then we can skip the middle element
    if (fast) {
        slow = slow.next;
    }

    while (slow) {
        let top = stack.pop();
        if (slow.data !== top) {
            return false;
        }
        slow = slow.next;
    }

    return true;
};

const linkedList = convertArrayToLinkedList([2, 2, 1, 1, 2]);
const isPalindrome = isPalindromeList(linkedList);

// printLinkedList(l1);
// printLinkedList(l2);
console.log(isPalindrome);
