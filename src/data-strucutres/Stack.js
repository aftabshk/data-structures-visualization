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
        return this.data[this.top--];
    }
}

export default Stack;