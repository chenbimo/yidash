import { describe, expect, it } from 'vitest'
import yd_is_odd from '../../lib/is/odd'

describe('yd_is_odd', () => {
    it('should be `true`', () => {
        expect(yd_is_odd(13)).toBeTruthy()
        expect(yd_is_odd(-13)).toBeTruthy()
    })

    it('should be `false`', () => {
        expect(yd_is_odd(0)).toBeFalsy()
        expect(yd_is_odd(2)).toBeFalsy()
        expect(yd_is_odd(-2)).toBeFalsy()
    })

    it('should throw Error', () => {
        expect(() => yd_is_odd(true)).toThrowError('value must be a number')
        expect(() => yd_is_odd(Symbol(''))).toThrowError('value must be a number')
        expect(() => yd_is_odd([])).toThrowError('value must be a number')
        expect(() => yd_is_odd({})).toThrowError('value must be a number')
        expect(() => yd_is_odd(new Date())).toThrowError('value must be a number')
        // ...
    })
})
