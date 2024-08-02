/**
 * @author wjr13294670259@163.com
 * @category browser
 * @alias yd_browser_irregularSorting
 * @param { Array} picList 图片列表
 * @param { String } 在dom 上展示
 * @param { Number } 每行展示个数
 * @summary 无规则图片排序
 */

export default (picList, containerDom, num) => {
    if (!containerDom || !picList.length) return;
    let screenWidth = containerDom.clientWidth;
    picList.forEach(async (item, index) => {
        const img = document.createElement('img');
        img.src = item.url;
        img.style.width = screenWidth / (num + 0.8) + 'px';
        img.style.position = 'absolute';
        img.loading = 'lazy';
        img.style.left = !(index % num) ? '10px' : (screenWidth / num) * (index % num) + 10 + 'px';

        if (index < num) {
            img.style.top = containerDom.offsetTop + 'px';
        } else {
            let topAndLeft = [];
            for (let i = 0; i < containerDom.childNodes.length; i++) {
                topAndLeft.push({
                    left: containerDom.childNodes[i].offsetLeft,
                    top: containerDom.childNodes[i].offsetTop + containerDom.childNodes[i].offsetHeight
                });
            }
            const allListSort = topAndLeft.sort((a, b) => a.top - b.top);
            const needList = allListSort.slice(allListSort.length - num, allListSort.length);
            const finallyTop = needList.sort((a, b) => a.top - b.top)[0];
            img.style.top = finallyTop.top + 10 + 'px';
            img.style.left = finallyTop.left + 'px';
        }
        await containerDom.appendChild(img);
    });
    let heightList = [];
    for (let i = 0; i < containerDom.children.length; i++) {
        heightList.push(containerDom.childNodes[i].offsetTop + containerDom.childNodes[i].offsetHeight);
    }
    containerDom.style.height = heightList.sort((a, b) => b - a)[0] + 'px';
};
