// 常见的姓氏
const surnames = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王'];

// 常见的名字
// eslint-disable-next-line prettier/prettier
const names = ['子璇', '淼', '国栋', '夫子', '瑞堂', '甜', '敏', '尚', '国贤', '贺祥', '晨涛', '昊轩', '易轩', '辰益', '帆', '冉', '瑾', '春', '瑾昆', '春齐', '杨', '文昊', '东雄', '霖', '浩晨', '熙涵', '溶溶', '冰枫', '欣宜', '豪', '欣慧', '建政', '美欣', '淑慧', '文轩', '杰', '欣源', '忠林', '榕润', '欣汝', '慧嘉', '新建', '建林', '亦菲', '林', '冰洁', '佳欣', '涵涵', '禹辰', '淳美', '泽惠', '伟洋', '涵越', '润丽', '翔', '淑华', '晶莹', '凌晶', '苒溪', '雨涵', '嘉怡', '佳毅', '子辰', '佳琪', '紫轩', '瑞辰', '昕蕊', '萌', '明远', '欣宜', '泽远', '欣怡', '佳怡', '佳惠', '晨茜', '晨璐', '运昊', '汝鑫', '淑君', '晶滢', '润莎', '榕汕', '佳钰', '佳玉', '晓庆', '一鸣', '语晨', '添池', '添昊', '雨泽', '雅晗', '雅涵', '清妍', '诗悦', '嘉乐', '晨涵', '天赫', '玥傲', '佳昊', '天昊', '萌萌', '若萌'];
/**
 * 生成一个姓名
 * @author xiaoxiaohuayu <https://github.com/xiaoxiaohuayu>
 * @category faker
 * @alias yd_faker_chineseName
 * @returns {String} 返回一个随机的中文姓名
 * @summary 应用场景：用于生成测试数据
 * @example
 * console.log(generateChineseName()); // 输出: 王国栋
 */
export function generateChineseName() {
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    return surname + name;
}
