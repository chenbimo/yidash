/**
 * 省、市、区提取
 * @author 陈随易 <https://chensuiyi.me>
 * @category 地址
 * @alias yd_address_areaMatch
 * @param {string} address 地址字符串
 * @returns {Array} 省市区
 * @example
 * const address1 = "北京市朝阳区建国门外大街";
 * const addressComponents1 = extractAddressComponents(address1);
 * console.log(addressComponents1); // 输出: { province: '北京', city: '朝阳', region: '建国门外大街' }
 *
 * @example
 * const address2 = "广东省深圳市南山区科技园";
 * const addressComponents2 = extractAddressComponents(address2);
 * console.log(addressComponents2); // 输出: { province: '广东', city: '深圳', region: '南山区科技园' }
 *
 * @example
 * const address3 = "上海市浦东新区张江高科技园区";
 * const addressComponents3 = extractAddressComponents(address3);
 * console.log(addressComponents3); // 输出: { province: '上海', city: '浦东新区', region: '张江高科技园区' }
 *
 * @example
 * const address4 = "黑龙江省哈尔滨市道里区";
 * const addressComponents4 = extractAddressComponents(address4);
 * console.log(addressComponents4); // 输出: { province: '黑龙江', city: '哈尔滨', region: '道里区' }
 *
 * @example
 * const address5 = "错误地址";
 * const addressComponents5 = extractAddressComponents(address5);
 * console.log(addressComponents5); // 输出: null
 */
export default (address) => {
    // 定义一个通用的正则表达式，匹配省、市、区
    const regex = /^(北京|天津|上海|重庆|河北|山西|辽宁|吉林|黑龙江|江苏|浙江|安徽|福建|江西|山东|河南|湖北|湖南|广东|广西|海南|四川|贵州|云南|陕西|甘肃|青海|西藏|内蒙古|新疆|宁夏|香港|澳门|台湾)(?:省|自治区|市|地区|特别行政区)(?<city>.*?[市区县])?(?<region>.{1,20})$/;
    const match = address.match(regex);

    if (!match) {
        return null;
    }

    // 从匹配结果中提取省、市、区信息
    const addressComponents = {
        province: match[1],
        city: match.groups?.city,
        region: match.groups?.region
    };

    return addressComponents;
};
