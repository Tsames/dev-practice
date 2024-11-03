"""
https://neetcode.io/problems/minimum-stack

Minimum Stack
Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.

Each function should run in O(1) time.

Example 1:
Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]
Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1

Constraints:
-2^31 <= val <= 2^31 - 1.
pop, top and getMin will always be called on non-empty stacks.
"""


class MinStack:
    """
    Retrieving the minimum element in constant time.
    This is easy to keep track of the minimum when we are only adding to the stack.
    But when we start removing elements from the stack, we could potentially remove the minimum.
    In which case, if we were keeping track of the minimum with a single variable, we would then no longer know what the next minimum is.

    We have to design a class where we can keep track of the elements that are next in line to be the minimum if the minimum gets removed from the stack.
    [5,3,1]  0,4,5,-1]
    
    We would want to keep track of local minimums.
    We could use a seperate stack to house our local minimums, so that we could complete all operations in constant time.
    """

    def __init__(self):
        self.stack = []
        self.localMins = []
        self.min = float("inf")

    def push(self, val: int):
        self.stack.append(val)
        if val <= self.min:
            self.localMins.append(val)
            self.min = val

    def pop(self):
        temp = self.stack.pop()
        if temp == self.min:
            self.localMins.pop()
            self.min = self.localMins[-1] if self.stack else float("inf")

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.localMins[-1]
    
minStack = MinStack()
minStack.push(1)
minStack.push(2)
minStack.push(0)
print(minStack.getMin())
minStack.pop()
print(minStack.top())
print(minStack.getMin())
