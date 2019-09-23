var express = require("express");
var router = express.Router();

const partent = require("../interface/parent");
const getIonicStepsShowDatas = require("../interface/ionicSteps/getIonicStepsShowDatas");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// 调用子进程接口
router.get("/parent", function (req, res, next) {
  partent.parent(req, res);
});

// ionic steps模拟数据展示
router.get("/getIonicStepsShowDatas", function (req, res, next) {
  getIonicStepsShowDatas.getIonicStepsShowDatas(req, res);
});

module.exports = router;