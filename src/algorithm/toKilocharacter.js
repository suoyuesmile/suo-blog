var num = 12778999994545456;
 var toKilocharacter = function(num) {
    var arr = num.toString().split("");
    for (var i = arr.length - 3; i > 0; i = i - 3) {
        arr.splice(i, 0, ",");
    }
    return arr.join("");
     
}

console.log(toKilocharacter(num));