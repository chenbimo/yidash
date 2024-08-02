import { beforeAll, afterAll, describe, it, expect, vi } from 'vitest';
import yd_datetime_friendlyDateStr from '../../lib/datetime/friendlyDateStr.js';

describe('yd_datetime_friendlyDateStr', () => {
    const fixedTime = new Date('2024-08-02 10:36:32').getTime();

    // 在所有测试之前钩住 Date.now()
    beforeAll(() => {
        vi.useFakeTimers();
        vi.setSystemTime(fixedTime);
    });

    // 在所有测试之后恢复 Date.now()
    afterAll(() => {
        vi.useRealTimers();
    });

    it('应正确处理 string 格式和 normal 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr('2024-01-03 04:55:22', 'normal');
        expect(result).toBe('1月3日 04:55:22');
    });

    it('应正确处理 string 格式和 blur 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr('2024-01-23 04:55:22', 'blur');
        expect(result).toBe('6个月前');
    });

    it('应正确处理 string 格式和 full 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr('2024-01-03 04:55:22', 'full');
        expect(result).toBe('2024-01-03 04:55:22');
    });

    it('应正确处理 string 格式和 ymd 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr('2024-01-03 04:55:22', 'ymd');
        expect(result).toBe('2024-01-03');
    });

    it('应正确处理 string 格式和 other 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr('2024-01-03 04:55:22', 'other');
        expect(result).toBe('2024-01-03 04:55:22');
    });

    // Date 类型
    it('应正确处理 Date 格式和 normal 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr(new Date('2024-01-03 04:55:22'), 'normal');
        expect(result).toBe('1月3日 04:55:22');
    });

    it('应正确处理 Date 格式和 blur 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr(new Date('2024-01-23 04:55:22'), 'blur');
        expect(result).toBe('6个月前');
    });

    it('应正确处理 Date 格式和 full 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr(new Date('2024-01-03 04:55:22'), 'full');
        expect(result).toBe('2024-01-03 04:55:22');
    });

    it('应正确处理 Date 格式和 ymd 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr(new Date('2024-01-03 04:55:22'), 'ymd');
        expect(result).toBe('2024-01-03');
    });

    it('应正确处理 Date 格式和 other 类型的输入', () => {
        const result = yd_datetime_friendlyDateStr(new Date('2024-01-03 04:55:22'), 'other');
        expect(result).toBe('2024-01-03 04:55:22');
    });

    // timestamp 类型
    it('应正确处理 timestamp 格式和 normal 类型的输入', () => {
        const timestamp = new Date('2024-01-03 04:55:22').getTime();
        const result = yd_datetime_friendlyDateStr(timestamp, 'normal');
        expect(result).toBe('1月3日 04:55:22');
    });

    it('应正确处理 timestamp 格式和 blur 类型的输入', () => {
        const timestamp = new Date('2024-01-23 04:55:22').getTime();
        const result = yd_datetime_friendlyDateStr(timestamp, 'blur');
        expect(result).toBe('6个月前');
    });

    it('应正确处理 timestamp 格式和 full 类型的输入', () => {
        const timestamp = new Date('2024-01-03 04:55:22').getTime();
        const result = yd_datetime_friendlyDateStr(timestamp, 'full');
        expect(result).toBe('2024-01-03 04:55:22');
    });

    it('应正确处理 timestamp 格式和 ymd 类型的输入', () => {
        const timestamp = new Date('2024-01-03 04:55:22').getTime();
        const result = yd_datetime_friendlyDateStr(timestamp, 'ymd');
        expect(result).toBe('2024-01-03');
    });

    it('应正确处理 timestamp 格式和 other 类型的输入', () => {
        const timestamp = new Date('2024-01-03 04:55:22').getTime();
        const result = yd_datetime_friendlyDateStr(timestamp, 'other');
        expect(result).toBe('2024-01-03 04:55:22');
    });

    // 其他固定测试用例
    it('应返回 "刚刚" 当输入为当前时间时', () => {
        const result = yd_datetime_friendlyDateStr(Date.now(), 'normal');
        expect(result).toBe('刚刚');
    });

    it('应返回 "10秒前" 当输入为10秒前时', () => {
        const result = yd_datetime_friendlyDateStr(Date.now() - 10000, 'normal');
        expect(result).toBe('10秒前');
    });

    it('应返回 "1分钟前" 当输入为1分钟前时', () => {
        const result = yd_datetime_friendlyDateStr(Date.now() - 60000, 'normal');
        expect(result).toBe('1分钟前');
    });

    it('应返回 "今天09:36" 当输入为1小时前时', () => {
        const result = yd_datetime_friendlyDateStr(Date.now() - 3600000, 'normal');
        expect(result).toBe('今天9:36');
    });

    it('应返回 "3小时前" 当输入3小时前且类型为模糊时', () => {
        const result = yd_datetime_friendlyDateStr('2024-08-02 07:35:30', 'blur');
        expect(result).toBe('3小时前');
    });

    it('应返回 "3天前" 当输入为3天前且类型为模糊时', () => {
        const result = yd_datetime_friendlyDateStr(Date.now() - 3600 * 1000 * 24 * 3, 'blur');
        expect(result).toBe('3天前');
    });

    it('应正确格式化完整时间类型', () => {
        const result = yd_datetime_friendlyDateStr('2024-01-03 04:55:22', 'full');
        expect(result).toBe('2024-01-03 04:55:22');
    });

    it('应正确格式化年月日时间类型', () => {
        const result = yd_datetime_friendlyDateStr('2024-01-03 04:55:22', 'ymd');
        expect(result).toBe('2024-01-03');
    });

    it('应返回 null 并记录错误当输入为空时', () => {
        console.error = vi.fn(); // 模拟 console.error
        const result = yd_datetime_friendlyDateStr(null, 'normal');
        expect(result).toBeNull();
        expect(console.error).toHaveBeenCalledWith('Unknown time format.');
    });

    it('应返回 null 并记录错误当输入为无效日期字符串时', () => {
        console.error = vi.fn(); // 模拟 console.error
        const result = yd_datetime_friendlyDateStr('invalid date string', 'normal');
        expect(result).toBeNull();
        expect(console.error).toHaveBeenCalledWith('Invalid Time string.');
    });

    it('应返回 null 并记录错误当输入为无效日期对象时', () => {
        console.error = vi.fn(); // 模拟 console.error
        const result = yd_datetime_friendlyDateStr(new Date('invalid date'), 'normal');
        expect(result).toBeNull();
        expect(console.error).toHaveBeenCalledWith('Invalid Date object.');
    });

    it('应正确处理类型为其他的情况', () => {
        const result = yd_datetime_friendlyDateStr(Date.now() - 5000, 'other');
        expect(result).toBe('5秒前');
    });

    it('应正确处理类型为默认情况', () => {
        const result = yd_datetime_friendlyDateStr(Date.now() - 3600 * 1000 * 24, 'default');
        expect(result).toBe('2024-08-01 10:36:32');
    });
});
