/**
 * 数结构遍历函数
 * @author 陈随易 <https://chensuiyi.me>
 * @category 树结构
 * @param {Array} tree 树结构数据
 * @param {Function} mapFunction 迭代函数
 * @returns {Function} 树结构迭代
 */
export function yd_tree_traverse(tree, mapFunction) {
    function preorder(node, index, parent) {
        const newNode = Object.assign({}, mapFunction(node, index, parent));

        if ('children' in node) {
            newNode.children = node.children.map(function (child, index) {
                return preorder(child, index, node);
            });
        }

        return newNode;
    }

    return preorder(tree, null, null);
}
