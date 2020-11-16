function NodeList(val) {
    this.val = val;
    this.next = null;
}

// 头插法（新结点插在头部）
function createByHead(nums) {
    let p = null;
    let head = new NodeList(null);

    for (const num of nums) {
        p = new NodeList(num);
        p.next = head.next;
        head.next = p;
    }

    return head;
}

// 尾插法（新结点插在尾部）
function createByTail(nums) {
    let head = new NodeList(null);
    let p = head;

    for (const num of nums) {
        s = new NodeList(num);
        p.next = s;
        p = p.next;
    }
    return head;
}

// 重置为空
function deleteAll(l1) {
    let p = l1;
    while(p) {
        q = p;
        delete p.next;
        p = q.next;
    }
}

const l1 = createByHead([1, 3, 5, 6, 7]);
const l2 = createByTail([1, 3, 5, 6, 7]);
console.log(JSON.stringify(l1));
console.log(JSON.stringify(l2));
deleteAll(l1);
console.log(JSON.stringify(l1));


