//1.
class _Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //insertion
    //inserting at the beginning
    insertFirst(item) {
        //create a new node item, point the head to that node 
        this.head = new _Node(item, this.head);
    }
    //inserting at the end 
    insertLast(item) {
        //check to see if the list is empty
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            //create a new node item
            let tempNode = this.head;
            //start at the begining of the list and move thrrough til end
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            //set the node's next pointer to the new node and give it the next pointer
            //of null, indicating that it is the last item in the list
            tempNode.next = new _Node(item, null)
        }
    }
    //insertBefore
    //part of problem 2
    insertBefore(item, key) {
        //start at list head
        let currNode = this.head;
        //if no head, list is empty
        if (!currNode) {
            return null;
        }
        //if the node containing the key is the head, use insertFirst
        if (currNode.value === key) {
            this.insertFirst(item);
            return;
        }
        //find the node with the key 
        while((currNode.next.value !== key) & (currNode.next.next !== null)) {
            currNode = currNode.next;
        }

        if(currNode.next.value === key) {
            let tempNode = new _Node(item, currNode.next);
            currNode.next = tempNode;
        }
        else {
            console.log('item to insert before not found')
            return;
        }
    }
    //insertAfter
    insertAfter(item, key) {
        //start at list head
        let currNode = this.head;
        //if no head, list is empty
        if (!currNode) {
            return null;
        }
        //find the node with the key
        while((currNode.value !== key) & (currNode.next !== null)) {
            currNode = currNode.next;
        }
        //if the node to insert after is the last node, just insert last
        if (currNode.value === key && currNode.next === null) {
            this.insertLast(item);
            return;
        }
        if (currNode.value === key) {
            let tempNode = new _Node(item, currNode.next);
            currNode.next = tempNode;
        }
        else {
            console.log('item to insert before not found');
            return;
        }
    }
    //insertAt
    insertAt(index, item) {
        if(!this.head) {
            console.log('list is empty, nothing to insert before')
            return;
        }
        //if index is 0, use insertFirst
        if (index === 0) {
            this.insertFirst(item);
            return;
        }
        //otherwise, move through the list 
        let count = 0;
        //start at head
        let currNode = this.head;
        while (count !== index && currNode.next !== null) {
            currNode = currNode.next;
            count++;
        }
        if (count === index) {
            this.insertBefore(item, currNode.insertBefore);
            return;
        }
        else {
            console.log('this index does not exist');
            return;
        }
    }
    //find
    find(item) {
        //start at the head
        let currNode = this.head;
        //if the list is empty return null
        if (!this.head) {
            return null;
        }
        //check for the item
        while (currNode.value !== item) {
            //return null if it's the end of the list and the item is not on
            //the list
            if (currNode.next === null) {
                return null;
            }
            //otherwise, keep looking
            else {
                currNode = currNode.next;
            }
        }
        //found it
        return currNode
    }
    //remove
    remove(item) {
        //if the list is empty 
        if (!this.head) {
            return null;
        }
        //if the node to be removed is head, make the next node head
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //start at the head 
        let currNode = this.head;
        //keeptrack of previous
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)) {
            //save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    // noDupes(list) {
    //     let current = this.head;
    //     while (current !== null) {
    //         let newNode = current;
    //         while (newNode.next !== null) {
    //             if (newNode.next.value === current.value) {
    //                 newNode.next = newNode.next.next;
    //             }
    //             else {
    //                 newNode = newNode.next
    //             }
    //         }
    //         current = current.next;
    //     }
    // }
}



//2.
function main() {
    let SSL = new LinkedList();
    let insertion = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
    insertion.map((item) => SSL.insertFirst(item));

    SSL.insertFirst('Tauhida')
    
    SSL.remove('squirrel')
    console.log(SSL)
    SSL.insertBefore('Athena', 'Boomer')
    SSL.insertAfter('Hotdog', 'Helo')
    SSL.insertAt(3, 'Kat')
    SSL.remove('Tauhida')
    console.log(SSL)
    // console.log(isEmpty(SSL))
    // console.log(findLast(SSL))
    // console.log(noDupes(SSL))
 
}
main();



//3. Supplemental functions for a linked list

//4. Mystery program
//this function removes duplicates I believe

//5. Reverse a list

//6. 3rd from the end
//is this basically if current.next.next.next === null then current is the 
//third from the end

//7. middle of a list
//if there are equal 

//8. cycle in a list

//9. doubly linked list
class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedLists {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        //create a new node with a value passed in
        let newNode = new Node(val);
        //if the head property is null, set the head and tail to be the newly
        //created node
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        //if not, set the next property on the tail to be that node
        else {
            this.tail.next = newNode;
            //set the previous property on the newly created node to be the tail
            newNode.prev = this.tail;
            this.tail = newNode; //this line doesn't make as much sense to me as the first two
        }
        this.length++;
        return this;
    }
    pop() {
        //if there is no head, aka if the list is empty, return undefined
        if (!this.head) {
            return undefined;
        }
        //store the current tail in a variable to return later
        let current = this.tail; //could also be called poppedNode
        //if the length is 1, set the head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            //update the tail to be the previous node
            this.tail = current.prev;
            //set the new tail's next to null
            this.tail.next = null;
            current.prev = null;
        }
        //decrement the length
        this.length--;
        //return the popped node
        return current;
    }
    //remove a node from the beginning
    shift() {
        //if length is 0, or no head, return undefined
        if (!this.head) return undefined;
        //store the current head property in a variable
        let oldHead = this.head;
        //if the length is 1
        if (this.length === 1) {
            //set the head to be null
            this.head = null;
            //set the tail to be null
            this.tail = null
        }
        else {
            //update the head to be the next of the old head
            this.head = oldHead.next;
            //set the head's prev property to null
            this.head.prev = null;
            //set the oldHead's next to null
            oldHead.next = null;
        }
        //decrement the length
        this.length--;
        return oldHead;
    }
    //add a node to the beginning
    unshift(val) {
        //create a new node with the value passed in
        let newNode = new Node(val);
        //if the length is 0
        if (this.length === 0) {
            //set the head to be the new node
            this.head = newNode;
            this.tail = newNode;
        }
        //else,
        else {
            //set the previous property on the head to be the new node 
            this.head.prev = newNode;
            //set the next property on the new node to be the head property
            newNode.next = this.head;
            //update the head to be the new node
            this.head = newNode
        }
        //increment length
        this.length++;
        //return list
        return this;
    }
    //accessing a node in a DLL by it's position
    get(index) {
        //if the index is <0 or >this.length return null
        if (index < 0 || index > this.length) return null;
        //if the index is <= half the length of the list
        if (index <= this.length / 2) {
            //loop through the list starting from the head and loop towards 
            //the middle
            let count = 0;
            let current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } 
        //if the index is > than half the length of the list
        else {
            //loop through the list starting from the tail towards the middle
            let count = this.length - 1;
            let current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        //return the node once it is found
        return current;
    }
    //replacing the value of a node in a doubly linked list
    set(index, value) {
        //create a variable which is the result of the get method at the index
        //passed to the function
        let foundNode = this.get(index);
        //if the get method returns a valid node, set the value of that node to 
        //be the value passed into the function
        if (foundNode !== null) {
            foundNode.value = value;
            //return true
            return true;
        }
        return false;
    }
    insert(index, value) {
        //if the index is less than 0 or greater than the length return false
        if (index < 0 || index > this.length) {
            return false;
        }
        //if the index is 0, use unshift
        if (index === 0) {
            return this.unshift(value);
        }
        //if the index is the same as the length, use push
        if (index === this.length) {
            return this.push(value);
        }
        let newNode = new Node(val);
        //use the get method to access the index - 1
        let beforeNode = this.get(index - 1);
        //set the next and prev properties on the correct nodes to link
        //everything together
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        //increment length
        this.length++;
        //return true
        return true;
    }
    //removing a node by position
    remove(index) {
        //if the index is less than 0 or >= length return undefined
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        //if the index is 0, shift
        if (index === 0) {
            return this.shift();
        }
        //if the index = length - 1, pop
        if (index === this.length - 1) {
            return this.pop();
        }
        //use the get method to retrieve the item to be removed
        let removedNode = this.get(index);
        //update the next and prev properties to remove the found node from the list
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        //set the next and prev to null on the found node
        removedNode.next = null;
        removedNode.prev = null;
        //decremnt the length
        this.length--;
        return removedNode;
    }
}
//insertion: O(1)
//removal: O(1)
//searching: O(n)
//access: O(n)

//10. Reverse a DLL