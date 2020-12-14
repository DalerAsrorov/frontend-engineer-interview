const { convertArrayToLinkedList, printLinkedList } = require('./linked-list-utils');
const ListNode = require('./linked-list');

function calcListLength(l1) {
    let node = l1;
    let counter = 0;

    while (node) {
        node = node.next;
        ++counter;
    }

    return counter;
}

const getIntersectionNode = function (headA, headB) {
    let len1 = calcListLength(headA);
    let len2 = calcListLength(headB);
    let diff = len1 - len2;
    let bigListNode = diff < 0 ? headB : headA;
    let smallerDiffNode = diff < 0 ? headA : headB;

    diff = Math.abs(diff);
    while (diff > 0) {
        if (bigListNode === smallerDiffNode) {
            return bigListNode;
        }
        bigListNode = bigListNode.next;
        diff--;
    }

    if (!bigListNode) {
        return null;
    }

    while (bigListNode && smallerDiffNode) {
        if (bigListNode === smallerDiffNode) {
            return bigListNode;
        }
        smallerDiffNode = smallerDiffNode.next;
        bigListNode = bigListNode.next;
    }

    return null;
};

const l1 = convertArrayToLinkedList([1, 9, 1, 2, 4]);
const l2 = convertArrayToLinkedList([3, 2, 4]);
l2.next = l1;
const isPalindrome = getIntersectionNode(l1, l2);

console.log(isPalindrome);
