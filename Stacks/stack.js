class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }
    push(val) {
        this.top += 1;
        this.stack[this.top] = val;
    }
    pop(val) {
        if(this.top === -1){
            throw new Error('The stack is already empty boss !!!');
        }
        const topValue = this.stack[this.top];
        this.top -= 1;
        return topValue;
    }
    topElement() {
        return this.stack[this.top];
    }
    print() {
        for(let i = this.stack.length -1 ; i >= this.top; i -= 1){
            console.log(this.stack[i]);
            console.log('----');
        }
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.print();