exports.parent = parent;

const child_process = require('child_process');

function parent(req, res) {
    try {
        let count = 0;
        for (var i = 0; i < 3; i++) {
            var worker_process = child_process.fork("interface/support.js", [i]);
            worker_process.on('exit', function (code) {
                count++;
                console.log("子进程[", i, "]已退出，退出码:" + code, new Date().getSeconds());
                if (count === 2) {
                    console.log("接口返回");
                    res.json("线程执行完毕");
                }
            });
        }
    } catch (error) {
        res.json(error);
    }
}