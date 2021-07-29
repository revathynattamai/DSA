class StackArr {
    constructor() {
        this.element = [];
    }

    push(value) {
        this.element[this.element.length] = value;
        // return this.element.length;
    }

    peek() {
        return this.element[this.element.length - 1]
    }

    pop() {
        let result = [];
        let delElement = this.element[this.element.length - 1]
        for(let i = 0; i < this.element.length - 1; i++) {
            result[i] = this.element[i]
        }
        this.element = result
        return delElement;
    }
}

let a = new StackArr();
a.push(1)
a.push(2)
console.log(a.peek())
console.log(a.pop())
console.log(a.peek())
a.push("codecamp")
console.log(a.peek())
console.log(a.pop())
console.log(a.peek())