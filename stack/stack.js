class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if(this.count === 0) return;
        let result = this.storage[this.count -1];
        delete this.storage[this.count -1];
        this.count--;
        return result;
    }

    peek() {
        return this.storage[this.count-1];
    }
}

let a = new Stack();

a.push(1)
a.push(2)
console.log(a.peek())
console.log(a.pop())
console.log(a.peek())
a.push("codecamp")
console.log(a.peek())
console.log(a.pop())
console.log(a.peek())

