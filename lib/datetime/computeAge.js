import dayjs from 'dayjs';

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
        const _birthday = dayjs(birthday);

        if (!_birthday.isValid()) {
            return 0;
        }

        const cur = dayjs();
        const age = cur.get('year') - _birthday.get('year') - (cur.get('month') < _birthday.get('month') || (cur.get('month') == _birthday.get('month') && cur.get('date') < _birthday.get('date')) ? 1 : 0);
        return age;
    }
    return 0;
};

export default computeAge;
