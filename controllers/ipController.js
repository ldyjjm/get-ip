const os = require('os');
exports.getCurrentIp = async (ctx) => {
    try {
        // 默认访问以太网
        const { type } = ctx.request.query || 'en0'
        const interfaces = await os.networkInterfaces();
        ctx.body = {
            data: interfaces[type]
        }
    } catch (e) {
        ctx.body = []
    }
}
exports.home = (ctx) => {
    ctx.body = '接口ok'
}
