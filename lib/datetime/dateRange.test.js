import { describe, test, expect } from 'vitest';
import dayjs from 'dayjs';
import yd_date_range from './dateRange';

describe('yd_date_range', () => {
    test('默认情况下返回当前时间范围', () => {
        const [start, end] = yd_date_range();
        expect(start.isSame(dayjs(), 'second')).toBe(true);
        expect(end.isSame(dayjs(), 'second')).toBe(true);
    });

    test('增加一年', () => {
        const [start, end] = yd_date_range(1);
        expect(end.year()).toBe(start.year() + 1);
    });

    test('增加一个月', () => {
        const [start, end] = yd_date_range(0, 1);
        expect(end.month()).toBe((start.month() + 1) % 12);
    });

    test('增加一天', () => {
        const [start, end] = yd_date_range(0, 0, 1);
        expect(end.date()).toBe(start.date() + 1);
    });

    test('增加一小时', () => {
        const [start, end] = yd_date_range(0, 0, 0, 1);
        expect(end.hour()).toBe((start.hour() + 1) % 24);
    });

    test('增加一分钟', () => {
        const [start, end] = yd_date_range(0, 0, 0, 0, 1);
        expect(end.minute()).toBe((start.minute() + 1) % 60);
    });

    test('增加一秒钟', () => {
        const [start, end] = yd_date_range(0, 0, 0, 0, 0, 1);
        expect(end.second()).toBe((start.second() + 1) % 60);
    });

    test('如果目标日期在当前日期之前，返回的顺序应调整', () => {
        const [start, end] = yd_date_range(-1); // 减少一年
        expect(start.isBefore(end)).toBe(true);
    });
});
