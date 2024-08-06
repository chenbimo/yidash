import { parseISO, isValid, differenceInYears, isBefore } from 'date-fns';

/**
 * 计算年龄
 *
 * @author 卞雪瑞 <bianxr0803@gmail.com>
 * @category 时间操作
 * @alias yd_compute_age
 * @param {String} birthday - 生日日期字符串
 * @summary 根据给的生日计算出用户的年龄
 * @returns {Number} - 返回计算出的年龄，如果未提供生日则返回0
 */
const computeAge = (birthday) => {
    if (birthday) {
        const _birthday = parseISO(birthday);

        if (!isValid(_birthday)) {
            return 0;
        }

        const cur = new Date();
        let age = differenceInYears(cur, _birthday);

        if (isBefore(cur, new Date(cur.getFullYear(), _birthday.getMonth(), _birthday.getDate()))) {
            age--;
        }

        return age;
    }
    return 0;
};

export default computeAge;
