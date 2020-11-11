function set_intersection(set1, set2) {
    if (set1.size > set2.size) {
        return set_intersection(set2, set1);
    }

    const intersection = new Set();
    for (const num of set1) {
        if (set2.has(num)) {
            intersection.add(num);
        }
    }
    return [...intersection];
}

function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    return set_intersection(set1, set2);
}

console.log(intersection([1, 2, 4], [2, 3]));