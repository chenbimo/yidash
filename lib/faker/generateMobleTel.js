/**
 * 生成一个手机号
 * @author xiaoxiaohuayu <https://github.com/xiaoxiaohuayu>
 * @example
 * console.log(generateMobleTel()); // 输出: 15105113629
 * @returns {String} 返回一个随机的手机号
 * @summary 应用场景：用于生成测试数据
 */
export function generateMobleTel () {
    // China Mobile 移动号段
    const c_Mobile = ['134', '147', '159', '184', '135', '150', '165', '187', '136', '151', '172', '188', '137', '152', '178', '195', '138', '157', '182', '197', '139', '158', '183', '198'];
    // China Unicom 联通号段
    const c_Unicom = ['130', '156', '185', '131', '166', '186', '132', '167', '196', '145', '171', '146', '175', '155', '176']
    // China Telecom 电信号段
    const c_Telecom = ['133', '177', '199', '149', '180', '153', '181', '162', '189', '173', '191', '174', '193']
    const prefixes = c_Mobile.concat(c_Unicom, c_Telecom)
    const prefix = prefixes[Math.floor(prefixes.length * Math.random())];
    let body = "";
    for (let i = 0; i < 8; i++) {
        body += Math.floor(Math.random() * 10);
    }
    return prefix + body;
}
