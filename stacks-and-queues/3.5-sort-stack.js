const Stack = require('./Stack');

const sortStack = (stack) => {
    let tempStack = new Stack();

    if (stack.isEmpty()) {
        throw new Exception('Cannot sort empty stack');
    }

    while (!stack.isEmpty()) {
        let topEl = stack.pop();

        while (!tempStack.isEmpty() && tempStack.peek() > topEl) {
            stack.push(tempStack.pop());
        }

        tempStack.push(topEl);
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }

    tempStack.print();
};

function main() {
    let stack1 = new Stack();

    stack1.push(2);
    stack1.push(6);
    stack1.push(2);
    stack1.push(3);
    stack1.push(1);
    stack1.push(7);
    stack1.push(4);
    stack1.push(3);

    sortStack(stack1);

    stack1.print();
}

main();