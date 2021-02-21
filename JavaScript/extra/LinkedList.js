class Node {
    constructor(_value) {
        this.value = _value;
        this.next = null;
    }

    toString() {
        return(`${this.value} -> `);
    }
};

class LinkedList {
    constructor() {
        this.header = null;
        this.length = 0;
    }

    addNode(value) {
        const node =  new Node(value);
        let curr = this.header;

        if(curr === null) 
            this.header = node;
        else {
            while(curr.next !== null)
                curr = curr.next;
            curr.next = node;
        }

        this.length++;
    }

    print() {
        let message = 'header -> ';
        let curr = this.header;

        while(curr) {
            message += curr.toString();
            curr = curr.next;
        }

        message += 'null';

        console.log(message);
    }

    get last() {
        let curr = this.header;

        while(curr.next) {
            curr = curr.next;
        }

        return curr.value;
    }

    get first() {
        if(this.header)
            return this.header.value;
        return null;
    }

    reverse() {
        if(!this.header || !this.header.next)
            return;
        
        let prev = this.header;
        let curr = this.header.next;
        let next = this.header.next;

        while(next){
            next = next.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.header.next = null;
        this.header = prev;
    }

    removeKNode(k) {
        let curr = this.header, next = this.header.next, i = 0;

        if(k === 1)
            this.header = next;

        for(let i = 2; i < k; i++){
            curr = curr.next;
            next = next.next;
        }

        if(next)
            curr.next =  next.next;
        else 
            curr.next = null;
    }

    circularLinkedList() {
        let slow = this.header, fast = this.header;

        while(fast.next.next){
            fast = fast.next.next;
            slow = slow.next;

            if(slow === fast)
                return true;
        };

        return false;
    }
};


const list = new LinkedList();
console.log(list.first);

list.print();
list.addNode(1);
list.print();
list.addNode(2);
list.print();
list.addNode(3);
list.print();

console.log(list.last);
console.log(list.first);

list.reverse();
list.print();

list.removeKNode(3);
list.print();

console.log(list.circularLinkedList());