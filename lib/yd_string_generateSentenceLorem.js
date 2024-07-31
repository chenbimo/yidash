import { yd_string_generateWordLorem } from './yd_string_generateWordLorem.js';

/**
 * 生成指定长度的 Lorem Ipsum 句子
 * @param {number} wordCount 句子长度
 * @example
 * console.log(yd_string_generateSentenceLorem()); // 输出 veniam ipsum reprehenderit aliqua anim voluptate dolor sed sunt sint.
 * console.log(yd_string_generateSentenceLorem(2)); // 输出 occaecat ut.
 * @author Jimmy Gatsby
 * @time 2024年7月31日 18点22分
 */
export function yd_string_generateSentenceLorem (wordCount = 10) {
    const sentence = [];
    for (let i = 0; i < wordCount; i++) {
        sentence.push(yd_string_generateWordLorem());
    }
    // 将单词拼接成句子，并在句尾添加句号
    return sentence.join(' ') + '.';
}
