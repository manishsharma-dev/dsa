class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let temp;
        if (!this.length) {
            return undefined;
        }
        temp = this.tail
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value)
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;

        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.length) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = temp.next;
            this.head.prev = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let temp;
        if (index < this.length / 2) {
            temp = this.head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        }
        else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        const newNode = new Node(value);
        let temp = this.get(index);
        let prev = temp.prev;
        prev.next = newNode;
        newNode.next = temp;
        temp.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        let temp = this.get(index);
        let prev = temp.prev;
        let next = temp.next;
        prev.next = temp.next;
        next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;
        return temp;
    }
}

let myDLL = new DoublyLinkedList(7);