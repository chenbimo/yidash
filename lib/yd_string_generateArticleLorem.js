import { yd_string_generateParagraphLorem } from './yd_string_generateParagraphLorem.js';

/**
 * 生成指定段落数的 Lorem Ipsum 文章
 * @param paragraphCount 段落数
 * @param sentencesPerParagraph 行数
 * @param wordsPerSentence 句子长度
 * @author Jimmy Gatsby
 */
export function yd_string_generateArticleLorem (
    paragraphCount = 10, sentencesPerParagraph = 10,
    wordsPerSentence = 30) {
    const article = [];
    for (let i = 0; i < paragraphCount; i++) {
        article.push(
            yd_string_generateParagraphLorem(sentencesPerParagraph,
                wordsPerSentence));
    }
    // 将段落拼接成文章
    return article.join('\n');
}

