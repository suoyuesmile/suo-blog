// Input abcadc

// Output 4(bcad)

// 1
// abc -> set
// a

// 2
// ''

// 3
// abc


function solve(s) {
    const len = s.length;
    const tmpSet = new Set();
    let i = 0, maxlen = 0;

    while(i < len) {
        if (!tmpSet.has(s[i]) && i === len - 1) {
            maxlen = Math.max(tmpSet.size, maxlen);
        }

        if (!tmpSet.has(s[i])) {
            tmpSet.add(s[i]);
        } else {
            maxlen = Math.max(tmpSet.size, maxlen);
            i = i - tmpSet.size;
            tmpSet.clear();
        }

        i++;
    }

    return maxlen;
}