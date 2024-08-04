import { describe, it, expect } from 'vitest';
import yd_array_uniqueByField from './uniqueByField.js';

describe('yd_array_uniqueByField', () => {
    it('returns unique array by age', () => {
        const array = [
            { age: 20, name: 'Andy' },
            { age: 21, name: 'Jack' },
            { age: 20, name: 'Jenson' }
        ];
        const result = yd_array_uniqueByField(array, 'age');
        expect(result).toEqual([
            { age: 20, name: 'Andy' },
            { age: 21, name: 'Jack' }
        ]);
    });

    it('returns unique array by class', () => {
        const array = [
            { age: 20, name: 'Andy', class: 'English' },
            { age: 21, name: 'Jack', class: 'History' },
            { age: 20, name: 'Jenson', class: 'Physics' },
            { age: 22, name: 'Cherry', class: 'Computer' },
            { age: 20, name: 'Polly', class: 'English' }
        ];
        const result = yd_array_uniqueByField(array, 'class');
        expect(result).toEqual([
            { age: 20, name: 'Andy', class: 'English' },
            { age: 21, name: 'Jack', class: 'History' },
            { age: 20, name: 'Jenson', class: 'Physics' },
            { age: 22, name: 'Cherry', class: 'Computer' }
        ]);
    });
});
