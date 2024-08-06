/**
 * @description 数组转树形
 * @author Yohann <https://github.com/yh4922>
 * @category array
 * @alias yd_array_to_tree
 * @param { Array } array
 * @param { any } id 主键ID
 * @param { any } parentId 关联父级ID
 * @param { string } childKey 子级key
 * @return 返回树形结构
 * @summary 传入数据根据id和parentId转换成树形结构，返回树形结构
 * @example
 * let arr = [
 *    { id: 1, parent_id: 0 },
 *    { id: 2, parent_id: 1 },
 *    { id: 3, parent_id: 1 },
 *    { id: 4, parent_id: 2 },
 *    { id: 5, parent_id: 2 },
 * ]
 * toTree(arr, 'id', 'parent_id', 'children')
 */

export default (sourceArray, id = 'id', parentId = 'parent_id', childKey = 'children') => {
    // 0. 深拷贝一份数据
    const array = JSON.parse(JSON.stringify(sourceArray));

    // 1. 将数据转换为对象形式
    const maps = {};
    array.forEach((item) => {
        maps[item[id]] = item;
    });

    // 2. 遍历数据，将每个节点添加到父节点的children中
    Object.keys(maps).forEach((key) => {
        // 当前节点
        const item = maps[key];
        // 父级节点
        const parent = maps[item[parentId]];

        // 当父级节点存在时，将当前节点添加到父级节点的【子级数组】中
        if (parent) {
            parent[childKey] = parent[childKey] || [];
            parent[childKey].push(item);
        }
    });

    // 创建一个新的数组
    const newArray = [];
    array.forEach((item) => {
        let parent_id = item[parentId];
        // 不存在父级ID 的数据 为根节点
        if (!parent_id) {
            newArray.push(maps[item[id]]);
        }
    });

    return newArray;
};
