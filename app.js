const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const IPRoutes = require('./routes/ipRoute');

const app = new Koa();
// 加载 cors 中间件
app.use(cors());

app.use(bodyParser());
app.use(IPRoutes.routes());
app.use(IPRoutes.allowedMethods());

app.listen(7267, () => {
    console.log('应用已经启动，http://localhost:7267');
})

module.exports = app;
