/*
https://leetcode.com/problems/min-stack/description/

155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.


Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2


Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
 */

class MinStack {
    stack: number[]
    min: number;

    constructor() {
        this.stack = [];
        this.min = Number.POSITIVE_INFINITY;
    }

    push(val: number): void {
        if (val <= this.min) {
            this.stack.push(this.min);
            this.min = val;
        }

        this.stack.push(val);
    }

    pop(): void {
        if (this.stack.pop() === this.min) this.min = this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min;
    }
}

const s = new MinStack();
s.push(-2);
s.push(0)
s.push(-3);
console.log(s.getMin());
s.pop();
console.log(s.top());
console.log(s.getMin());