const Router = require("koa-router");
const { home, getCurrentIp } = require("../controllers/ipController.js");
// 创建一个 router 实例
const router = new Router();
// 获取ip的接口
router.get("/getCurrentIp", getCurrentIp);
router.get('/', home)

module.exports = router;
