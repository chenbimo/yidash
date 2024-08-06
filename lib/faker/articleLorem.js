import yd_faker_sentenceLorem from './paragraphLorem.js';

/**
 * 生成指定段落数的 Lorem Ipsum 文章
 * @alias yd_faker_articleLorem
 * @category faker
 * @param {number} paragraphCount 段落数
 * @param {number} sentencesPerParagraph 行数
 * @param  {number} wordsPerSentence 句子长度
 * @returns {string} 返回文章
 * @author Jimmy Gatsby
 * @example yd_faker_articleLorem() //
 */
export default (paragraphCount = 10, sentencesPerParagraph = 10, wordsPerSentence = 30) => {
    const article = [];
    for (let i = 0; i < paragraphCount; i++) {
        article.push(yd_faker_sentenceLorem(sentencesPerParagraph, wordsPerSentence));
    }
    // 将段落拼接成文章
    return article.join('\n');
};
