const Linklist = require('../../data-structure/linklist-curd');

// function insertByTail(val, p) {
//     if (!p) {
//         p = new Linklist.NodeList(val);
//     } else {
//         p.next = new Linklist.NodeList(val);
//         p = p.next;
//     }
// }

function mergeTwoLists(l1, l2) {
    let head = null, p = null;

    if (!l1) {
        return l2;
    }

    if (!l2) {
        return l1;
    }

    while(l1 || l2 ) {
        if (!l1) {
            p.next = l2;
            l2 = null;
            continue;
        }
        if (!l2) {
            p.next = l1;
            l1 = null;
            continue;
        }

        let val = l1.val < l2.val ? l1.val : l2.val;

        if (!p) {
            head = p = new Linklist.NodeList(val);
        } else {
            p.next = new Linklist.NodeList(val);
            p = p.next;
        }

        l1.val < l2.val ? l1 = l1.next : l2 = l2.next
    }

    return head;
}

const l1 = Linklist.createByTail([1, 3, 8])
const l2 = Linklist.createByTail([2, 4, 9])
// console.log(JSON.stringify(l1.next), JSON.stringify(l2.next));
console.log(JSON.stringify(mergeTwoLists(l1, l2)));

// 1 -> 3 -> 8
// 2 -> 4 -> 9


// 1 -> 2 -> 3 -> 4 -> 8 -> 9



