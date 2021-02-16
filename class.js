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

}

//2.
function main() {
    let SSL = new LinkedList();
    let insertion = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
    insertion.map((item) => SSL.insertFirst(item));

    SSL.insertFirst('Tauhida')
    
    SSL.remove('squirrel')
    
    SSL.insertBefore('Athena', 'Boomer')
    SSL.insertAfter('Hotdog', 'Helo')
    SSL.insertAt(3, 'Kat')
    SSL.remove('Tauhida')
   

}

main();

//3. Supplemental functions for a linked list

//4. Mystery program

//5. Reverse a list

//6. 3rd from the end

//7. middle of a list

//8. cycle in a list

//9. doubly linked list

//10. Reverse a DLL