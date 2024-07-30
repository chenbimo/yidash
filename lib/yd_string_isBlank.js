import { yd_is_empty } from './yd_is_empty.js';

/**
 * 指定字符串是否为空或空白
 *
 * **字符串为 `null` 或 `undefined` 返回为 `true`**
 * @param str 要转换的字符串
 * @returns {boolean} 返回结果
 * @author Jimmy Gatsby
 * @time 2024年7月30日 13点55分
 */
export function yd_string_isBlank (str) {
    return yd_is_empty(str) || str.trim() === 0;
}
