// while(line = readline()) {
//     var lines = line.split(" ");
//     var a = lines[0];
//     var b = lines[1];
//     print (a + b);
// }
// while(line = readline()) {
//     var lines = line.split(" ");
//     var num = praseInt(lines[0]);
//     var unit = lines[0];
//     print unitConvert(num, unit);
// }


// 122 Kbps  = 122000
// 
var num = 122.4, unit = "Tbps";

function unitConvert(num, unit) {
    var result = num;
    switch(unit) {
        case "Kbps":
            result *= 1000;
            break;
        case "Mbps":
            result *= 1000 * 1000;
            break;
        case "Tbps":
            result *= 1000 * 1000 * 1000;
    }
    return result;
}
console.log(unitConvert(num, unit));

