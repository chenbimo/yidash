/**
 * 获取格式化的当前日期和时间，支持自定义格式。
 *
 * @param {string} [format="YYYY-MM-DD_HH-MM-SS"] - 可选的日期时间格式。
 * @returns {string} 格式化后的日期时间字符串。
 *
 * @example
 * console.log(getFormattedDateTime()) // 输出: "2024-07-30_15-45-30"
 *
 * @example
 * console.log(getFormattedDateTime("DD/MM/YYYY HH:MM:SS")) // 输出: "30/07/2024 15:45:30"
 *
 * @example
 * console.log(getFormattedDateTime("MM-DD-YYYY")) // 输出: "07-30-2024"
 *
 * @author penn <https://github.com/penn201500>
 */
function getFormattedDateTime(format = "YYYY-MM-DD_HH-MM-SS") {
    try {
        const now = new Date()
        const year = now.getFullYear()
        const month = (now.getMonth() + 1).toString().padStart(2, "0")
        const day = now.getDate().toString().padStart(2, "0")
        const hours = now.getHours().toString().padStart(2, "0")
        const minutes = now.getMinutes().toString().padStart(2, "0")
        const seconds = now.getSeconds().toString().padStart(2, "0")

        // 使用相应的值替换格式中的占位符
        const formattedDateTime = format
            .replace("YYYY", year)
            .replace("MM", month)
            .replace("DD", day)
            .replace("HH", hours)
            .replace("MM", minutes)
            .replace("SS", seconds)

        return formattedDateTime
    } catch (error) {
        console.error("格式化日期时出错:", error)
        return null
    }
}
