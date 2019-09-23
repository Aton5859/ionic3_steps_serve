/* setTimeout(function () {
    console.log("进程 " + process.argv[2] + " 执行。", new Date().getTime());
}, process.argv[2] * 10000); */
try {
    let count = 0;
    if (process.argv[2] === "0") {
        for (let i = 0; i < 1000; i++) {
            count++;
        }
        console.log("counts:", count);
        console.log("---", process.argv[2], "-0--");
    } else if (process.argv[2] === "1") {
        for (let i = 0; i < 5000; i++) {
            count++;
        }
        console.log("counts:", count);
        console.log("---", process.argv[2], "-1--");
    } else if (process.argv[2] === "2") {
        for (let i = 0; i < 100000; i++) {
            count++;
        }
        console.log("counts:", count);
        console.log("---", process.argv[2], "-2--");
    }
    console.log("子进程【", process.argv[2], "】准备退出");
} catch (error) {
    alert(error);
}