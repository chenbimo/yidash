import { describe, it, expect } from 'vitest';
import yd_helper_chain from './chain.js';

describe('yd_helper_chain test suit case', () => {
    const add = (x) => x + 1;
    const multiply = (x) => x * 2;
    const subtract = (x) => x - 3;
    // 测试基础的链式调用功能
    it('should perform basic chaining of functions', async (t) => {
        const chainedFunction = yd_helper_chain(add, multiply, subtract);
        expect(chainedFunction(5)).toBe(9); // (5 + 1) * 2 - 3 = 9
    });

    // 测试字符串处理的链式调用
    it('should perform string transformations in sequence', async (t) => {
        const toUpperCase = (str) => str.toUpperCase();
        const addExclamation = (str) => str + '!';
        const repeat = (str) => str + str;
        const shout = yd_helper_chain(toUpperCase, addExclamation, repeat);
        expect(shout('hello')).toBe('HELLO!HELLO!'); // hello -> HELLO -> HELLO! -> HELLO!HELLO!
    });

    // 测试无效输入（非函数类型）处理
    it('should throw an error if any of the inputs are not functions', () => {
        const invalidChain = () => yd_helper_chain(add, null, subtract);
        expect(invalidChain(1)).toThrowError('第1个参数必须是一个函数');
    });

    // 测试没有输入函数的情况
    it('should return the undefined if no functions are provided', () => {
        const identityChain = yd_helper_chain();
        expect(identityChain(10)).toBeUndefined();
        expect(identityChain('test')).toBeUndefined();
    });

    // 测试多个参数输入的情况
    it('should handle functions with multiple arguments', () => {
        const sum = (a, b) => a + b;
        const square = (x) => x * x;
        const sumAndSquare = yd_helper_chain(sum, square);
        expect(sumAndSquare(2, 3)).toBe(25); // (2 + 3) ^ 2 = 25
    });

    // 测试没有输入参数的情况
    it('should return undefined if no input arguments are provided', () => {
        const chainedFunction = yd_helper_chain(add);
        expect(chainedFunction()).toBeNaN(); // undefined + 1 = NaN
    });
});
