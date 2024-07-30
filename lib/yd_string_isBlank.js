import { yd_is_empty } from './yd_is_empty.js';

/**
 * 指定字符串是否为空或空白
 * @author Jimmy Gatsby
 * @category 字符串
 * @param str 要转换的字符串
 * @returns {boolean} 返回结果
 * @time 2024年7月30日 13点55分
 * @summary 字符串为 `null` 或 `undefined` 返回为 `true`
 */
export function yd_string_isBlank(str) {
    return yd_is_empty(str) || str.trim() === 0;
}
