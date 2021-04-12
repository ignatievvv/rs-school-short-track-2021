// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.value = 0;
    this.next = null;
    this.length = 0;
    this.last = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (this.value === 0) {
      this.value = element;
      this.length++;
      this.last = this;
    } else {
      this.last.next = new ListNode(element);
      this.length++;
      this.last = this.last.next;
    }
  }

  dequeue() {
    if (this.length === 1) {
      const num = this.value;
      this.value = 0;
      this.next = null;
      return num;
    }
    const num = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    return num;
  }
}

module.exports = Queue;
