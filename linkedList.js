class Node{
  constructor (data, next = null ) {
    this.data = data;
    this.next = next;
  };
} 

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add data to end of the list
  append(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Add data to start of the list
  prepend(data) {
    const newNode = new Node(data);
    let current;  

    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++
  }

  printSize(){
    console.log(`Size: ${this.size}`);
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  printHead() {
    console.log(this.head);
  }

  printTail() {
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
    }
    console.log(current);
  }

  at(index) {
    // If index is out of range, or there is no node in the list
    if (index > this.size || index < 0 || this.head === null) return;

    if (index === 0 ) {
      return this.head;
    }

    // Set current to 1st node
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next
    }
    console.log(current);
    return current;
  }

  pop() {
    let current = this.head;

    if(current === null) return null;
    this.head = current.next;
    this.size--;
  }

  insertAt(data, index) {
    // If index is out of range, return null
    if(index > 0 && index > this.size) return null;

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const newNode = new Node (data);

    // Set current to 1st node
    let current = this.head;
    let previous;

    // Set the current to be next node, and previous to be current node
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }

    // Insert newNode between previous node and current node
    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }

  removeAt(index) {
    // If index is out of range, return null
    if(index > 0 && index > this.size) return null;

    // If removing the head (index === 0)
    if (index === 0) {
      this.head = this.head.next;
    }

    let current = this.head;
    let previous;

    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    // Skipping the current node
    previous.next = current.next;
    this.size--;
  }

  contains(data) {
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
      if (current.data === data) {
        return console.log('True');
      }
    }
    return console.log('False');
  }

  find(data) {
    let current = this.head;
    let index = 0;

    // Returns true and index of the node containing value, return null if not data not found
    while (current && current.next !== null) {
      current = current.next;
      index++;
      if (current.data === data) {
        return console.log(`Index: ${index}`);
      }
    }
    return console.log('Null');
  }

  toString() {
    let current = this.head;
    let result = '';

    if (current === null) return null;

    while (current && current.next !== null) {
      result += `(${current.data}) -> `;
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

const ll = new LinkedList;
ll.append('100');
ll.append('200');
ll.append('300');
ll.append('400');
ll.append('500');
ll.append('600');
ll.prepend('50');
//ll.pop();
//ll.insertAt('69', 2)

//ll.printHead();
//ll.printTail();
//ll.at(1);
//ll.find('100');
//ll.contains('1200');
//ll.toString();
ll.removeAt(2);

ll.printListData();
ll.printSize();