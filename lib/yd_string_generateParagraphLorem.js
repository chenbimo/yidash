import { yd_string_generateSentenceLorem } from './yd_string_generateSentenceLorem.js';


/**
 * 生成指定句数的 Lorem Ipsum 段落
 * @param sentenceCount 行数
 * @param wordsPerSentence 句子长度
 * @example
 * console.log(yd_string_generateParagraphLorem()); // 输出 tempor in incididunt eu nisi in voluptate excepteur ullamco mollit. of...
 * @author Jimmy Gatsby
 *
 */
export function yd_string_generateParagraphLorem (
    sentenceCount = 10, wordsPerSentence = 10) {
    const paragraph = [];
    for (let i = 0; i < sentenceCount; i++) {
        paragraph.push(
            yd_string_generateSentenceLorem(wordsPerSentence));
    }
    // 将句子拼接成段落
    return paragraph.join(' ');
}
