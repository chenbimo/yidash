import { parseISO, isValid, differenceInYears, isBefore } from 'date-fns';

/**
 * 计算年龄
 * @alias yd_compute_age
 * @category datetime
 * @param {string} birthday - 生日日期字符串
 * @returns {number} - 返回计算出的年龄，如果未提供生日则返回0
 * @author 卞雪瑞 <bianxr0803@gmail.com>
 * @summary 根据给的生日计算出用户的年龄
 * @example yd_compute_age()
 */
export default (birthday) => {
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
