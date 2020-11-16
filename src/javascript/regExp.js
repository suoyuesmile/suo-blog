// assert 断言

// match
// exec
// test
// search
// replace
// split
// filter

const text = '09:00-19:00';

const pattern = /^[0-2][0-9]:[0-5][0-9]-[0-2][0-9]:[0-5][0-9]$/;


// console.log(text.match(pattern));
// console.log(text.search(pattern));
// console.log(text.split(pattern));
// // console.log(text.filter(pattern));
// console.log(pattern.test(text));
// console.log(pattern.exec(text));

let demo = 'https://developer.mozilla.org///en-US//docs/Web/JavaScript/Guide/Regular_Expressions';

demo = demo.replace(/([\/]{2,})/g, '/');

console.log(demo);

