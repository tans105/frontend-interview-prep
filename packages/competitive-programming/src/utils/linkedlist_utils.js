export class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export const printList = node => {
  const valArray = [];
  while (node) {
    valArray.push(node.val);
    node = node.next;
  }

  console.log(valArray);
}

export const populateLinkedList = array => {
  if (!array) {
    return null;
  }

  let head, n;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      head = new ListNode(array[i])
      n = head;
    } else {
      n.next = new ListNode(array[i])
      n = n.next;
    }
  }

  return head;
}