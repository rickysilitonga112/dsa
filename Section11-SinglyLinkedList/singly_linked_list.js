// Linked list is a piece of data {which called a val}
// Reference to the next called {next}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Pushing a node, is adding a new node to the end
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head == null) return undefined;
    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(val) {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = this.next;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
}

let first = new SinglyLinkedList();
first.push("Hello");
first.push("Goodby");
first.push("!");
first.pop();
console.log(first);
