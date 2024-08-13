import { describe, it, expect } from 'vitest';
import repeatExecute from './repeatExecute.js';

describe('repeatExecute', () => {
    it('should work well', () => {
        const result = repeatExecute(() => {
            console.log(1);
        }, 5);
        expect(typeof result).toMatchInlineSnapshot(`"object"`);
    });

    it('在延时时间内多次调用确保只执行一次', (done) => {});

    it('首次执行立即执行', (done) => {});
});
