import { generateSentenceLorem } from './sentenceLorem.js';

/**
 * 生成指定句数的 Lorem Ipsum 段落
 * @author Jimmy Gatsby
 * @category faker
 * @alias yd_faker_paragraphLorem
 * @param sentenceCount 行数
 * @param wordsPerSentence 句子长度
 * @example
 * console.log(yd_string_generateParagraphLorem()); // 输出 tempor in incididunt eu nisi in voluptate excepteur ullamco mollit. of...
 */
export default (sentenceCount = 10, wordsPerSentence = 10) => {
    const paragraph = [];
    for (let i = 0; i < sentenceCount; i++) {
        paragraph.push(generateSentenceLorem(wordsPerSentence));
    }
    // 将句子拼接成段落
    return paragraph.join(' ');
};
