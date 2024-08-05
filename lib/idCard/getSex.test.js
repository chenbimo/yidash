import { describe, it, expect } from 'vitest';
import yd_idCard_getSex from './getSex.js';

describe('yd_idCard_getAge', () => {
    it('获取性别', () => {
        const sex_1 = yd_idCard_getSex('220181199608286312');
        expect(sex_1).toEqual('男性');
        const sex_2 = yd_idCard_getSex('42132120020509720X');
        expect(sex_2).toEqual('女性');
    });
});
