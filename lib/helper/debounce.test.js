import { describe, it, expect } from 'vitest';
import yd_helper_debounce from './debounce.js';

describe('yd_helper_debounce 测试套件', () => {
    it('默认防抖测试', () => {
        const debounceFn = yd_helper_debounce(() => {}, 1000);
        expect(typeof debounceFn).toBe('function');
    });

    it('在延时时间内多次调用确保只执行一次', (done) => {
        let count = 0;
        const debounceFn = yd_helper_debounce(() => {
            count++;
        });
        debounceFn();
        debounceFn();
        debounceFn();
        debounceFn();
        setTimeout(() => {
            expect(count).toBe(1);
            done();
        }, 2000);
    });

    it('首次执行立即执行', (done) => {
        let count = 0;
        const debounceFn = yd_helper_debounce(
            () => {
                count++;
            },
            1000,
            true
        );
        debounceFn();
        debounceFn();
        setTimeout(() => {
            expect(count).toBe(2);
        }, 2000);
    });
});
