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
    let temp = this.tail;
    let current = this.tail;
    while (current) {
      current = this.tail.next;
    }
    this.tail = current;
  }
}

let first = new SinglyLinkedList();
first.push("Hello");
first.push("Goodby");
first.push("!");
console.log(first);
