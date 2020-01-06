// 单链表
function ListNode(val) {
  this.val = val
  this.next = null
}

var l1 = new ListNode(1)
var node2 = new ListNode(2)
l1.next = node2

console.log(l1)
console.log(l1.next)
console.log(l1.next.val)
console.log(l1.next.next)
