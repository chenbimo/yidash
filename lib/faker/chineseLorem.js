import { chineseCommonWords } from '../../config/chineseCommonWords.js';
import { simplifiedChinesePunctuations } from '../../config/simplifiedChinesePunctuations.js';
const chineseCommonWordsLength = chineseCommonWords.length;

function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

/**
 * 中文乱文假数生成
 * @alias yd_faker_chineseLorem
 * @category faker
 * @param {number} len 生成的文字长度
 * @returns {string} 返回生成的字符
 * @author Jimmy Gatsby
 * @example yd_faker_chineseLorem(10) // ''
 */
export default (len) => {
    // 如果长度违法
    if (len > chineseCommonWordsLength || len <= 0) {
        return '';
    }
    let characters = chineseCommonWords[getRandomNumber(chineseCommonWordsLength)];
    for (let i = 1; i < len; i++) {
        if (Math.random() < 0.04) {
            // 前一个字符是标点则后一个字符不为标点
            if (simplifiedChinesePunctuations.indexOf(characters[i - 1]) === -1) {
                characters += simplifiedChinesePunctuations[getRandomNumber(simplifiedChinesePunctuations.length)];
                continue;
            }
        }
        characters += chineseCommonWords[getRandomNumber(chineseCommonWordsLength)];
    }

    // 当文本最后一个字符非标点符号时为其添加末尾标点
    if (simplifiedChinesePunctuations.indexOf(characters[characters.length - 1]) === -1) {
        const endPunctuatoins = ['。', '！', '？'];
        characters += endPunctuatoins[getRandomNumber(endPunctuatoins.length)];
    }
    // 添加换行
    characters = characters.replace(/\*/g, '。').replace(/%/g, '！').replace(/@/g, '？');

    return characters;
};
