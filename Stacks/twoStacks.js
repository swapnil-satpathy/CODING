class TwoStacksInArray {
    constructor(size) {
        this.firstTop = -1;
        this.secondTop = size;
        this.array = new Array(size);
    }
    pushToFirst(element) {
        if(this.firstTop === this.secondTop - 1){
            throw new Error('No more space to push into first array');
        }
        this.array[++this.firstTop] = element;
     }
    pushToSecond(element) {
        if(this.firstTop === this.secondTop - 1){
            throw new Error('No more space to push into second array');
        }
        this.array[--this.secondTop] = element;
    }
    popFromFirst(){
        if(this.firstTop === -1){
            throw new Error('Already Empty Stack');
        }
        const poppedElement = this.array[this.firstTop];
        this.firstTop -= 1;
        return poppedElement;
    }
    popFromSecond(){
        if(this.secondTop === this.array.length){
            throw new Error('Already Empty Second Stack');
        }
        const poppedElement = this.array[this.secondTop];
        this.secondTop += 1;
        return poppedElement;
    }
    printFirstStack() {
        for(let i = this.firstTop; i >= 0; i -= 1) {
            console.log(this.array[i]);
        }
    }
    printSecondStack() {
        for(let i = this.secondTop; i < this.array.length; i += 1) {
            console.log(this.array[i]);
        }
    }
}

const obj = new TwoStacksInArray(5);
obj.pushToFirst(1);
obj.pushToSecond(2);
obj.pushToFirst(3);
obj.pushToSecond(4);
obj.pushToSecond(5);
obj.popFromFirst();
obj.popFromSecond();
obj.popFromSecond();

obj.printFirstStack();
console.log('\n\n');
obj.printSecondStack();