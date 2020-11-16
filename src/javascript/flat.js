// Array.prototype.flat

const origin = [1, [2, 3], [4, [5, 6], [7, 8, 9]]]


function flat(origin) {
    let res = []
    for (let i = 0; i < origin.length; i++) {
        if (Array.isArray(origin[i])) {
            res = res.concat(flat(origin[i]))
        } else {
            res.push(origin[i])
        }
    }
    return res
}

function reduce_flat(origin) {
    return origin.reduce((a, b) => {
        if (Array.isArray(b)) {
            return a.concat(reduce_flat(b))
        } else {
            return a.concat(b)
        }
    }, [])
}

console.log(reduce_flat(origin))
console.log(flat(origin))
