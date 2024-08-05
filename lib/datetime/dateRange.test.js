import { describe, test, expect } from 'vitest';
import { add, isEqual, isBefore, startOfSecond } from 'date-fns';
import yd_date_range from './dateRange';

describe('yd_date_range', () => {
    test('默认情况下返回当前时间范围', () => {
        const [start, end] = yd_date_range();
        const now = new Date();
        expect(isEqual(startOfSecond(start), startOfSecond(now))).toBe(true);
        expect(isEqual(startOfSecond(end), startOfSecond(now))).toBe(true);
    });

    test('增加一年', () => {
        const [start, end] = yd_date_range(1);
        expect(end.getFullYear()).toBe(start.getFullYear() + 1);
    });

    test('增加一个月', () => {
        const [start, end] = yd_date_range(0, 1);
        expect((end.getMonth() + 12) % 12).toBe((start.getMonth() + 1) % 12);
    });

    test('增加一天', () => {
        const [start, end] = yd_date_range(0, 0, 1);
        expect(end.getDate()).toBe(start.getDate() + 1);
    });

    test('增加一小时', () => {
        const [start, end] = yd_date_range(0, 0, 0, 1);
        expect((end.getHours() + 24) % 24).toBe((start.getHours() + 1) % 24);
    });

    test('增加一分钟', () => {
        const [start, end] = yd_date_range(0, 0, 0, 0, 1);
        expect((end.getMinutes() + 60) % 60).toBe((start.getMinutes() + 1) % 60);
    });

    test('增加一秒钟', () => {
        const [start, end] = yd_date_range(0, 0, 0, 0, 0, 1);
        expect((end.getSeconds() + 60) % 60).toBe((start.getSeconds() + 1) % 60);
    });

    test('如果目标日期在当前日期之前，返回的顺序应调整', () => {
        const [start, end] = yd_date_range(-1); // 减少一年
        expect(isBefore(start, end)).toBe(true);
    });
});
