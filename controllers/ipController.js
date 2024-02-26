const os = require('os');
exports.getCurrentIp = async (ctx) => {
    try {
        // 默认访问以太网
        const { type } = ctx.request.query || 'en0'
        const interfaces = await os.networkInterfaces();
        // 测试
        ctx.body = {
            type,
            value: os.networkInterfaces(),
            data: interfaces[type]
        }
    } catch (e) {
        ctx.body = []
    }
}
exports.home = (ctx) => {
    ctx.body = '接口ok'
}
