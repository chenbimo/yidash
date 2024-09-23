
/**
 * 合并两个对象，给最后一个优先级高
 * @author 王勇 <https://github.com/wangyong1997>
 * @category object
 * @alias yd_object_objectMerge
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 * @example
    yd_object_objectMerge({aa:{cc:123, bb:456}, cc:123}, {aa: {cc: 'abc'}, cc: 123}) '
        => '{"aa":{"cc":"abc","bb":456},"cc":123}'
        
    yd_object_objectMerge({obj:{cc:123, bb:[1,2,3,4]}, age:12}, {obj: {bb: ['a', 'b']}, cc: 123})
        => '{"obj":{"cc":123,"bb":["a","b"]},"age":12,"cc":123}'
 */
export default function objectMerge(target, source) {
    if (typeof target !== 'object') {
        target = {}
    }
    if (Array.isArray(source)) {
        return source.slice()
    }
    Object.keys(source).forEach(property => {
        const sourceProperty = source[property]
        if (typeof sourceProperty === 'object') {
            target[property] = objectMerge(target[property], sourceProperty)
        } else {
            target[property] = sourceProperty
        }
    })
    return target
}
  