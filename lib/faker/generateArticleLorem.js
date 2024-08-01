import { generateParagraphLorem } from './generateParagraphLorem.js';

/**
 * 生成指定段落数的 Lorem Ipsum 文章
 * @param paragraphCount 段落数
 * @param sentencesPerParagraph 行数
 * @param wordsPerSentence 句子长度
 * @author Jimmy Gatsby
 */
export function generateArticleLorem (
    paragraphCount = 10, sentencesPerParagraph = 10,
    wordsPerSentence = 30) {
    const article = [];
    for (let i = 0; i < paragraphCount; i++) {
        article.push(
            generateParagraphLorem(sentencesPerParagraph,
                wordsPerSentence));
    }
    // 将段落拼接成文章
    return article.join('\n');
}

