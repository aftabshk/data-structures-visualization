class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(node) {
        node.next = this.head;
        this.head = node;
        return this;
    }

    remove() {
        this.head = this.head.next;
        return this;
    }

    length() {
        return this.getAllNodes().length;
    }

    getAllNodes() {
        const nodes = [];
        let node = this.head;

        while (node != null) {
            nodes.push(node);
            node = node.next;
        }
        return nodes
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNext(node) {
        this.next = node;
    }
}

export {LinkedList, Node};
