/**
 * 将一个字符串数组中的元素随机排序
 * 
 * @author 卞雪瑞 <bianxr0803@gmail.com>
 * @param array 待随机排序的字符串数组
 * @returns 返回被随机排序的数组
 */
export function arrayRandom(array: string[]) {
    let len = array.length;
    let index, temp;
    while (len > 0) {
      index = Math.floor(Math.random() * len);
      temp = array[len - 1];
      array[len - 1] = array[index];
      array[index] = temp;
      len--;
    }
    return array;
}