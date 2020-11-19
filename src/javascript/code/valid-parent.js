// [({}[])



function validParent(s) {
    const len = s.length;
    const tmpStack = [];
    const patternMap = new Map();
    patternMap.set('{', '}');
    patternMap.set('(', ')');
    patternMap.set('[', ']');

    let i = 0;
    while(i < len) {
        if (patternMap.has(s[i])) {
            tmpStack.push(s[i]);
        } else {
            if (patternMap.get(tmpStack.pop()) !== s[i]) {
                return false
            }
        }
        i++
    }

    return tmpStack.length === 0;

}

console.log(validParent('()'));
 