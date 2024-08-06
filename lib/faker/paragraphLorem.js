import yd_faker_sentenceLorem from './sentenceLorem.js';

/**
 * 生成指定句数的 Lorem Ipsum 段落
 * @alias yd_faker_paragraphLorem
 * @category faker
 * @param {number} sentenceCount 行数
 * @param {number} wordsPerSentence 句子长度
 * @returns {object} 返回段落
 * @author Jimmy Gatsby
 * @example yd_faker_paragraphLorem() // tempor in incididunt eu nisi in voluptate excepteur ullamco mollit. of...
 */
export default (sentenceCount = 10, wordsPerSentence = 10) => {
    const paragraph = [];
    for (let i = 0; i < sentenceCount; i++) {
        paragraph.push(yd_faker_sentenceLorem(wordsPerSentence));
    }
    // 将句子拼接成段落
    return paragraph.join(' ');
};
