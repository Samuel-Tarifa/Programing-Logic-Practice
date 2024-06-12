class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek(){
    return this.items[this.front]
  }

  size(){
    return this.rear-this.front
  }

  print(){
    console.log(this.items)
  }

}


let queue=new Queue

queue.enqueue(2)
queue.enqueue(5)

queue.print()

console.log('peek',queue.peek())

console.log(queue.dequeue());

queue.print()
