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
    //remove a node from the beginning of a linked list
    shift() {
        //if there are no nodes return undefined
        if(!this.head) {
            return undefined
        }
        //store the current head property in a variable
        let current = this.head;
        //set the head property to be the current head's property
        this.head = current.next;
        //decrement the length by 1
        this.length --;
        //return the value of the node removed
        return current //aka removed node
    }
    //adding a new node to the begining of a linked list
    //accept a value
    unshift(val) {
        //create a new node using the value passed to the function
        let newNode = new _Node(val);
        //if there is no head property on the list, set the head and tail to be the
        //newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        //else, set the newly created node's next property to be the current head
        //property on the list
        else {
            newNode.next = this.head;
            //set the head property on the list to be that newly created node
            this.head = newNode;
        }
        //increment the length of the list by 1
        this.length++;
        //return the linked list
        return this;
    }
    //retrieving a node by it's position in a linked list
    //the function should accept an index
    get(index) {
        //if the index is <0 or is >= list.length, return null
        if (index < 0 || index >= list.length) {
            return null;
        }
        //loop through the list until you reach the index and return the node
        //at that specific index
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            counter ++;
            current = current.next;
        }
        return current;
    }
    //changing the value of a node based on its position in the linked list
    //accept a value and an index
    set(val, index) {
        //use get() to find the specific node
        let foundNode = this.get(index);
        //if the node is found, set the value of that node to be the value passed
        //to the function and return true
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        //if the node is not found, return false
        return false;
    }
    //adding a node to the linked list at a specific position
    //accepts index and value
    insert(index, val) {
        //if the index is less than 0 or greater than the length, return false
        if (index < 0 || index > this.length) {
            return false;
        }
        //if the index is the same as the length, push a new node to the end of the
        //list
        if (index === this.length) {
            return !!this.push(val);
        }
        //if the index is 0, unshift a new node to the start of the list
        if (index === 0) {
            return !!this.unshift(val); //double bang !! coerses to true/false
        }
        //else, using the get method, access the node at index -1
        let newNode = new _Node(val);
        let temp = prev.next;
        let prev = this.get(index-1);
        //set the next property on the new node to be the previous next
        newNode.next = temp;
        //increment the length
        this.length++;
        //retun true
        return true;
    } 
    //removing a node from a linked list at a specific position
    //accept an index
    remove(index) {
        //if the index is less than 0 or greater than the length, return undefined
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        //if the index is the same as length - 1, pop()
        if (index === this.length - 1) {
            return this.pop();
        }
        //if the index is 0, shift
        if (index === 0) {
            return this.shift()
        }
        //else, using the get method, access the node at index - 1
        else {
            let previousNode = this.get(index - 1);
            let removed = previousNode.next;
            //set the next property to be the next of the next
            previousNode.next = removed.next;
            //decrement by 1
            this.length--;
            //return the value of the node removed
            return removed;
        }
    }
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    reverse() {
        //create a variable called node and initialize it to the head property
        let node = this.head;
        //swap the head and tail
        this.head = this.tail;
        this.tail = node;
        //create a variable called next
        let next;
        //create a variable called prev
        let prev = null;
        //loop through the list
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            //HUHH
        }
        return this;
    }
}

class SinglyLinkedList2 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //adding a node to the end of a list- PUSH should accept a value
    push(val) {
        //create a new node using the value passed to the function
        //if there is no head property on the list, set the head and tail to be the
        //newly created node
        //else, set the next property on the tail to be the new node and set the tail
        //property on the list to be the newly created node
        //increment the length by 1   
        //return the linked list 
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;

    }
    //removing a node from the end of a linked list- POP
    pop() {
        //if there are no nodes in the list, return undefined
        //loop through the list until you reach the tail  
        //set the tail to be the second to last node
        //set the next property of the 2nd to last node to be null
        //decrement the length of the list by 1
        //return the value of the node removed
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current; 

    }
    //remove a node from the beginning of a linked list
    shift() {
        //if there are no nodes return undefined
        //store the current head property in a variable
        //set the head property to be the current head's property
        //decrement the length by 1
        //return the value of the node removed //aka removed node
        //
        //if the list is empty return undefined
        //create a variable to store the old head in
        //set the head to the next of the head
        //decrement the length
        //return the old/ removed head
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.current.next;
        this.length--;
        return current;
    }
    //adding a new node to the begining of a linked list
    //accept a value
    unshift(val) {
        //create a new node using the value passed to the function
        //if there is no head property on the list, set the head and tail to be the
        //newly created node
        //else, set the newly created node's next property to be the current head
        //property on the list
        //set the head property on the list to be that newly created node
        //increment the length of the list by 1
        //return the linked list
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        //create a new node using the val passed in
        //if the list is empty set the values of the head and tail to newNode
        //otherwise, set the next of newNode to the head and set the head to newNode
        //increment the length
        //retun the list

    }
    //retrieving a node by it's position in a linked list
    //the function should accept an index
    get(index) {
        //if the index is <0 or is >= list.length, return null
        //loop through the list until you reach the index and return the node
        //at that specific index
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            counter ++;
            current = current.next;
        }
        return current;
        //if the index is less than 0 or greater than or equal to the length of
        //the list, return null
        //set a counter variable to 0
        //set a current variable to the head
        //while the counter !== index, increment counter and set current to current.next
        //return current
    }

    //changing the value of a node based on its position in the linked list
    //accept a value and an index
    set(val, index) {
        //use get() to find the specific node
        //if the node is found, set the value of that node to be the value passed
        //to the function and return true
        //if the node is not found, return false
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
         return false
         //use get(index) to find the node
         //if the node is found, set the value of that node to be the value passed to
         //set and return true
         //else, return false

    }
    //adding a node to the linked list at a specific position
    //accepts index and value
    insert(index, val) {
        //if the index is less than 0 or greater than the length, return false
        //if the index is the same as the length, push a new node to the end of the
        //list
        //if the index is 0, unshift a new node to the start of the list
        //else, using the get method, access the node at index -1
        //set the next property on the new node to be the previous next
        //increment the length
        //retun true
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val)
            return true
        }
        if (index === 0) {
            this.unshift(val)
            return true
        }
        let newNode = new _Node(val);
        let temp = prev.next;
        let prev = this.get(index-1);
        newNode.next = temp;
        this.length++;
        return true;
        //if the index is less than 0 or greater than the length return false
        //if the index is = to the length, use push to add value
        //if the index is = to 0 use unshift to add the node
        //for any other index, store the new node in a variable
        //honestly idk whats goin on down here
    } 
    //removing a node from a linked list at a specific position
    //accept an index
    remove(index) {
        //if the index is less than 0 or greater than the length, return undefined
        //if the index is the same as length - 1, pop()
        //if the index is 0, shift
        //else, using the get method, access the node at index - 1
        if (index < 0 || index > this.length) return undefined;
        if (index == (this.length - 1)) {
            this.pop();
        }
        if (index == 0) {
            this.shift();
        }
        else {
            let previousNode = this.get(index - 1);
            let removed = previousNode.next;
            //set the next property to be the next of the next
            previousNode.next = removed.next;
            //decrement by 1
            this.length--;
            //return the value of the node removed
            return removed;
        }
    }

    print() {
        //decalre a variable to hold an array
        //declare a variable current and set it to the head of the list
        //loop through the LL, pushing each 'current value' to the array and 
        //set current to current.next
        //at the end of the loop console.log the array
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    reverse() {
        //create a variable called node and initialize it to the head property
        //swap the head and tail
        //create a variable called next
        //create a variable called prev
        //loop through the list
        
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this
        //declare a variable node and set it to this.head
        //swap the head and the tail
        //create a variable called next
        //create a variable called prev
        //loop through the list
        //set next to node.next
        //set node.next to prev
        //set prev to node
        //set node to next
        
    }
}

//leet code
var longestCommonPrefix = function(strs) {
    //create newArr
    //break each string into it's own array
    //for each string, if the letter at i = the previous string's letter at i add
    //the letter to the newArr
    //after going through the list, turn the newArr into a string and return it
    let newArr = [];
    let arr = strs.split('')
    for (let i = 0; i < arr.length; i++) {
        newArr = arr[i]
        console.log(newArr)
    }
};

console.log(longestCommonPrefix(['yellow', 'place', 'plank']))