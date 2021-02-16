class _Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //adding a node to the end of a list- PUSH should accept a value
    push(val) {
        //create a new node using the value passed to the function
        let newNode = new _Node(val);
        //if there is no head property on the list, set the head and tail to be the
        //newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        //else, set the new property on the tail to be the new node and set the tail
        //property on the list to be the newly created node
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //increment the length by 1
        this.length++;
        //return the linked list 
        return this;
    }
    //removing a node from the end of a linked list- POP
    pop() {
        //if there are no nodes in the list, return undefined
        if (!this.head) {
            return undefined;
        }
        //loop through the list until you reach the tail
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        console.log(current.val)
        console.log(newTail.val)
        //set the tail to be the second to last node
        this.tail = newTail;
        //set the next property of the 2nd to last node to be null
        this.tail.next = null;
        //decrement the length of the list by 1
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        //return the value of the node removed
        return current;
    }

}