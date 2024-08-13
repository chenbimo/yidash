import { describe, it, expect } from 'vitest';
import repeatExecute from './repeatExecute.js';

describe('repeatExecute', () => {
    it('should work well', async () => {
        let sum = 0;
        await repeatExecute(
            () => {
                sum += 1;
            },
            5,
            300
        );

        expect(sum).toBe(5);
    });
});
