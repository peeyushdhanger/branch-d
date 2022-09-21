class QueueStack{
    constructor(){
      this.q1 = new Queue();  
      this.q2 = new Queue();  
    }
    push(x){
      // code here
    while(!this.q1.empty()){
  
        this.q2.push(this.q1.pop())
      }
      this.q1.push(x)
      while(!this.q2.empty()){
        this.q1.push(this.q2.pop())
      }
    }
    pop(){
      // code here
      if(!this.q1.empty()){
        let x = this.q1.front_ele()
      this.q1.pop()
      return x
      }
      return -1
        }
    }
// var stack = new QueueStack();
// stack.push(2);
// stack.push(3);
// stack.pop();
// stack.push(4);
// stack.pop()
// console.log(stack.element);


