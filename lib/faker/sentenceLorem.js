import yd_faker_wordLorem from './wordLorem.js';

/**
 * 生成指定长度的 Lorem Ipsum 句子
 * @author Jimmy Gatsby
 * @category faker
 * @alias yd_faker_sentenceLorem
 * @param {number} wordCount 句子长度
 * @example
 * console.log(yd_string_generateSentenceLorem()); // 输出 veniam ipsum reprehenderit aliqua anim voluptate dolor sed sunt sint.
 * console.log(yd_string_generateSentenceLorem(2)); // 输出 occaecat ut.
 */
export default (wordCount = 10) => {
    const sentence = [];
    for (let i = 0; i < wordCount; i++) {
        sentence.push(yd_faker_wordLorem());
    }
    // 将单词拼接成句子，并在句尾添加句号
    return sentence.join(' ') + '.';
};
