let ListNode = require('./linked-list');

function convertArrayToLinkedList(arr) {
    if (arr.length === 0) {
        return new ListNode(0);
    }
    let head = new ListNode(arr[0]);
    let node = head;

    for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }

    return head;
}

function getMidNode(llist, size) {
    const midIndex = Math.floor(size / 2);
    let p = llist;

    for (let i = 0; i < midIndex; i++) {
        p = p.next;
    }

    return p;
};

function printLinkedList(linkedList) {
    if (!linkedList) {
        return null;
    }

    let head = linkedList;
    let lStr = '';

    while (head !== null) {
        lStr += `${head.data} => `;
        head = head.next;
    }

    lStr += 'null';
    console.log(lStr);
    return lStr;
}

module.exports = {
    convertArrayToLinkedList,
    getMidNode,
    printLinkedList
};