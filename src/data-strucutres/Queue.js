class Queue {
    constructor() {
        this.tail = -1;
        this.data = [];
    }

    enqueue(node) {
        this.data[++this.tail] = node;
        return this;
    }

    length() {
        return this.tail + 1;
    }

    dequeue() {
        const result = this.data[0];

        for (let i = 0; i < this.tail; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.tail--;
        return result;
    }

    getAllElements() {
        if (this.tail < 0) return [];

        return this.data.slice(0, this.tail + 1)
    }
}

export default Queue;