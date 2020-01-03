// while(line = readline()) {
//     var lines = line.split(" ");
//     print(delStr(line[0], line[1]));
// }

var str = "They are students.";
var del = "aeiou";
console.log(delStr(str, del));

var delStr = function(str, del) {
    var strArr, delArr, i, j;

    strArr = str.split("");
    delArr = del.split("");

    for (i = 0; i < delArr.length; i++) {
        for (j =0; j < strArr.length; j++) {
            if (delArr[i] === strArr[j]) {
                strArr.splice(j, 1);
            }
        }
    }
    str = strArr.join("");
    return str;
}

