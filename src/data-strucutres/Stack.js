class Stack {
    constructor() {
        this.top = -1;
        this.data = [];
    }

    push(frame) {
        this.data[++this.top] = frame;
        return this;
    }

    pop() {
        this.top--;
        return this.data[this.top];
    }

    getAllElements() {
        if (this.top < 0) return [];

        return this.data.slice(0, this.top + 1)
    }
}

export default Stack;