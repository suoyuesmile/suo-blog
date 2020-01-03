const array = [1, 3, 2, 6, 2, 3, 4, 7, 8, 9, 10]
function set_uniqu(array) {
    return [...new Set(array)]
}

function filter_uniqu(array) {
    return array.filter((item, index) => array.indexOf(item) === index)
}

function filter_map_uniqu(array) {}
function reduce_uniqu(array) {
    return array.reduce(
        (prev, cur, index, array) =>
            prev.includes(cur) ? prev : prev.concat(cur),
        []
    )
}
console.log('newSet', set_uniqu(array))
console.log('filter', filter_uniqu(array))
console.log('reduce', reduce_uniqu(array))
