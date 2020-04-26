function sleep(milliseconds) {
    const startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliseconds);
}
sleep(10000);