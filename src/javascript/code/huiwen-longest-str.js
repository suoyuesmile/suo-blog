// Input babad
// Output bab

// isHuiwen
// ab

function solve(s) {
    const len = s.length;
    const middle = len / 2;

    let i = 0, j = len -1;


    while (i < middle + 1 && j >= middle - 1) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

console.log(solve('abac'));