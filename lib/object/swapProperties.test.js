import { it, expect, describe } from 'vitest';
import yd_object_swapProperties from './swapProperties.js';

describe('yd_object_swapProperties', () => {
    it('should swap properties of 2 objects correctly', () => {
        const obj1 = { name: 'A', age: 20 };
        const obj2 = { name: 'B', age: 35 };
        yd_object_swapProperties(obj1, obj2, 'name');
        expect(obj1.name).toBe('B');
        expect(obj1.age).toBe(20);
        expect(obj2.name).toBe('A');
        expect(obj2.age).toBe(35);
    });

    it('should throw error if obj1 is null', () => {
        const obj1 = null;
        const obj2 = { name: 'B', age: 35 };
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow(TypeError);
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow('输入的参数必须是对象');
    });

    it('should throw error if obj2 is not an object', () => {
        const obj1 = { name: 'A', age: 20 };
        const obj2 = 1;
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow(TypeError);
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow('输入的参数必须是对象');
    });

    it('should throw error if prop is not a string ', () => {
        const obj1 = { name: 'A', age: 20 };
        const obj2 = { name: 'B', age: 35 };
        expect(() => yd_object_swapProperties(obj1, obj2, 1)).toThrow(TypeError);
        expect(() => yd_object_swapProperties(obj1, obj2, 1)).toThrow('属性名称必须是字符串');
    });

    it('should throw error if the prop does not exist in ojb1', () => {
        const obj1 = { age: 20 };
        const obj2 = { name: 'B', age: 35 };
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow(Error);
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow('属性 "name" 在其中一个对象中不存在');
    });

    it('should throw error if the prop does not exist in ojb2', () => {
        const obj1 = { name: 'A', age: 20 };
        const obj2 = { age: 35 };
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow(Error);
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow('属性 "name" 在其中一个对象中不存在');
    });

    it('should throw error if obj2 is not an object', () => {
        const obj1 = { name: 'A', age: 20 };
        const obj2 = 1;
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow(TypeError);
        expect(() => yd_object_swapProperties(obj1, obj2, 'name')).toThrow('输入的参数必须是对象');
    });
});
