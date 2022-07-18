// Single Stack
// Only one array, two stacks using single array

let stack = [];
let MAX_STACK_SIZE = 5;
let top1 = -1;
let top2 = MAX_STACK_SIZE - 1;

class Stack {
  //   constructor() {
  //     this.stack = [];
  //     this.top1 = -1;
  //     this.top2 = this.MAX_STACK_SIZE - 1;
  //     this.MAX_STACK_SIZE = 5;
  //   }
  push(item, type) {
    // Whether stack is full or not
    if (type === "s1") {
      if (top1 + 1 >= top2) {
        console.log("Stack has reached to its MAX capacity");
        return -1;
      }
      stack[++top1] = item;
    } else if ((type = "s2")) {
      if (top1 >= top2 - 1) {
        console.log("Stack has reached to its MAX capacity");
        return -1;
      }
      stack[--top2] = item;
    }
  }
  pop(type) {
    // whether we have item left to remove or not
    if (type === "s1") {
      if (top1 === -1) {
        console.log("Stack has reached to its MAX capacity");
        return -1;
      }
      let item = stack[top1];
      stack[top1] = undefined;
      top1--;
      return item;
    } else if ((type = "s2")) {
      if (top2 + 1 === MAX_STACK_SIZE) {
        console.log("Stack has nothing to remove, add something");
        return -1;
      }
      let item = stack[top2];
      stack[top2++] = undefined;
      return item;
    }

    // if (this.top === -1) {
    //   console.log("Stack has nothing to remove, add something");
    //   return -1;
    // }
    // let item = this.stack.pop();
    // this.top--;
    // return item;
  }

  print() {
    console.log(stack);
  }
}

//Main program

let s1 = new Stack();
let s2 = new Stack();
s1.push(1, "s1");
s1.push(2, "s1");
s1.push(5, "s2");
s1.push(4, "s2");
// s1.push(3, "s1");
console.log(stack);

s1.pop("s1"); //2 --undefined
console.log(s1.pop("s2")); //4
console.log(s1.pop("s2")); //5
console.log(s1.pop("s2")); // Error
console.log(stack);
// obj.print();
// obj.push(1);
// obj.push(2);
// obj.push(3);
// obj.print();

// console.log(obj.pop()); //3
// console.log(obj.pop()); //2

// obj.print(); //1

// Approach1: [1, 2, 3, 4, 5, 6];
// Approach2: []
