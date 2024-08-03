/**
 * 数组下表随机排序（洗牌算法）
 * @author 凌霄云上 <379193176@qq.com>
 * @category array
 * @alias yd_array_randomIndices
 * @param {Array} array
 * @returns {Array} 返回随机下标数组
 * @summary 这个函数保持原有数组顺序，根据随机下标数组获取
 * @example
 * yd_array_randomIndices(['a','b','c','d','d','e']); 数组下标[0-5]
 * 结果：可能是[5,3,4,0,1,2]
 * }
 */

export default (arr) =>{
    const indices = Array.from(arr.keys());   
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]]; 
    }
    return indices;
};
