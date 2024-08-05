import { describe, test, expect } from 'vitest';
import { format, parseISO, getYear, subMonths } from 'date-fns';
import dy_compute_age from './computeAge'; // 确保路径正确

describe('dy_compute_age', () => {
    test('正确计算年龄', () => {
        const birthday = '1990-01-01'; // 例如，出生日期为 1990 年 1 月 1 日
        const expectedAge = new Date().getFullYear() - 1990; // 计算预期的年龄
        const age = dy_compute_age(birthday);
        expect(age).toBe(expectedAge);
    });

    test('计算同一天出生的年龄应为 0', () => {
        const today = format(new Date(), 'yyyy-MM-dd');
        const age = dy_compute_age(today);
        expect(age).toBe(0);
    });

    test('边界情况：出生日期在今年的某一天', () => {
        const birthday = format(subMonths(new Date(), 5), 'yyyy-MM-dd'); // 例如，5 个月前
        const expectedAge = getYear(new Date()) - getYear(parseISO(birthday));
        const age = dy_compute_age(birthday);
        expect(age).toBe(expectedAge);
    });

    test('无效日期应返回 0', () => {
        const invalidDate = 'not-a-date';
        const age = dy_compute_age(invalidDate);
        expect(age).toBe(0);
    });

    test('未提供出生日期应返回 0', () => {
        const age = dy_compute_age();
        expect(age).toBe(0);
    });
});
