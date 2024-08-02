/**
 * 英文常用假文单词
 */
// eslint-disable-next-line prettier/prettier
const loremIpsumWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'];

/**
 * 生成一个 `lorem` 单词
 * @author Jimmy Gatsby
 * @category faker
 * @alias yd_faker_wordLorem
 * @example
 * console.log(yd_faker_wordLorem()); // 输出: aliqua
 */
export default () => {
    const randomIndex = Math.floor(Math.random() * loremIpsumWords.length);
    return loremIpsumWords[randomIndex];
};
