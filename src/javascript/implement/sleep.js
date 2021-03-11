function sleep(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));   
}


async function test() {
    console.log('start');
    await sleep(3000);
    console.log('end');
}

test();

// 强行占线 while (new Date().getTime() < start + ms);
