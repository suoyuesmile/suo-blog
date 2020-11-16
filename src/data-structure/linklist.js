// 单链表
function ListNode(val) {
  this.val = val
  this.next = null
}

// 生成
// const l1 = new ListNode(1);
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(3);


function create(arr) {
    let head = null;
    let p = null;
    for (const item of arr) {
        if (p) {
            p.next = new ListNode(item);
            p = p.next;
        } else {
            head = p = new ListNode(item);
        }
    }
    return head;
}

function get(list, index) {
    let p = list;
    let i = 1;
    while(p) {
        if (i == index) {
            return p;
        }
        p = p.next
        i++;

        if (!p && index >= i) {
            throw new Error('过界');
        }
    }
}

function insertAt(list, index, el) {
    let p = list;
    let i = 1;
    while (p) {
        if (i === index) {
            el.next = p.next;
            p.next = el;
        }
        p = p.next;
        i++;
    }
}

function deleteAt(list, index) {
    let p = list;
    let i = 1;
    // 无头结点的操作
    if (!index) {
        list = list.next;
        return;
    }
    while (p) {
        if (i === index) {
            p.next = p.next.next;
        }
        p = p.next;
        i++;
    }
}



const l1 = create([1, 2, 3]);
insertAt(l1, 1, new ListNode(4));
console.log(JSON.stringify(l1));
deleteAt(l1, 1);
console.log(JSON.stringify(l1));
deleteAt(l1, 0);
console.log(JSON.stringify(l1));



