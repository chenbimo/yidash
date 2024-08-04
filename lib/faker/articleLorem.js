import { generateParagraphLorem } from './paragraphLorem.js';

/**
 * 生成指定段落数的 Lorem Ipsum 文章
 * @author Jimmy Gatsby
 * @category faker
 * @alias yd_faker_articleLorem
 * @param paragraphCount 段落数
 * @param sentencesPerParagraph 行数
 * @param wordsPerSentence 句子长度
 *
 */
export default (paragraphCount = 10, sentencesPerParagraph = 10, wordsPerSentence = 30) => {
    const article = [];
    for (let i = 0; i < paragraphCount; i++) {
        article.push(generateParagraphLorem(sentencesPerParagraph, wordsPerSentence));
    }
    // 将段落拼接成文章
    return article.join('\n');
};
