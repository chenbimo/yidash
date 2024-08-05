/**
 * 根据标签筛选数组元素
 * 
 * 此函数用于从一个特定的数组中筛选出标签（label）在指定标签数组中的元素
 * 它通过检查数组中每个元素的标签是否包含在给定的标签数组中来实现筛选
 * 这在处理具有标签或标识符的数组时非常有用，尤其是在数据处理或数据筛选的场景中
 * 
 * @author 卞雪瑞 <bianxr0803@gmail.com>
 * @param arry 具有 label 和 value 属性的对象数组
 * @param keys 标签数组，用于筛选 arry 中的元素
 * @returns 筛选后的数组，仅包含 label 在 keys 中的元素
 */
export function arrayPickBy(arry: { label: string; value: number }[], keys: string[]) {
    return arry.filter(item => keys.includes(item.label));
}