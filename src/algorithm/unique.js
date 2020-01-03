var originStr = "aaabbbccc";

function unique(str) {
    var strArr = str.split(""),
        memArr = [ strArr[0] ],
        i;
    // 遍历数组，不等于前一个的元素的，放置到一个新数组中
    for (i = 1; i < strArr.length ; i++) {
        if (strArr[i] != strArr[i-1]) {
            memArr.push(strArr[i]);
        }
    }
    // 合并数组成字符串
    str = memArr.join("");
    return str;
}

console.log(unique(originStr));
