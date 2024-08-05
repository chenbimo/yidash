/**
 * 根据指定的键名数组，从原始数组中排除相应的元素
 * 
 * 此函数主要用于动态排除原始数组中包含特定键名的元素，返回一个新的数组
 * 它通过检查每个数组元素的`label`属性是否包含在`keys`数组中来决定是否排除该元素
 * 
 * @author 卞雪瑞 <bianxr0803@gmail.com>
 * @param arry 原始数组，每个元素都有`label`和`value`属性
 * @param keys 需要排除的键名数组
 * @returns 返回一个新的数组，其中不包含`keys`中指定键名的元素
 */
export function arrayOmitBy(arry: { label: string; value: number }[], keys: string[]) {
    return arry.filter(item => !keys.includes(item.label));
}