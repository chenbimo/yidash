/**
 * 随机生成的颜色（16进制）
 * @author Zhoozie <https://github.com/Zhoozie>
 * @category data
 * @alias yd_data_randomColor
 * @returns String 随机生成的颜色
 */
export default () => {
	let arr = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'8',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
	]
	let str = '#'
	for (var i = 0; i < 6; i++) {
		let temp = arr[getRandom(0, arr.length - 1)]
		str = str + temp
	}
	return str
}

/**
 * 随机生成数字
 * @returns Number
 */
function getRandom(N, M) {
	return Math.floor(Math.random() * (M - N + 1) + N)
}
