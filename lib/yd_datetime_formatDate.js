/**
 * 格式化日期
 * @author @author 楠木 <157884200@qq.com> <https://github.com/nanmu-self>
 * @category utils
 * @param {Date|string|number} date 要格式化的日期对象/日期字符串/时间戳
 * @param {string} [format='yyyy/MM/dd hh:mm:ss'] 格式字符串，默认为 'yyyy/MM/dd hh:mm:ss'
 * @param {string} [locale='zh'] 格式化使用的语言，默认为中文 'zh'，可选英文 'en'
 * @returns {string} 格式化后的日期字符串
 * @summary 这个函数接受一个日期对象、日期字符串或时间戳，并根据提供的格式和语言选项返回一个格式化的日期字符串。
 * 支持多种日期格式选项，包括年、月、日、小时、分钟、秒和毫秒。
 * 可以根据需要调整日期的显示方式，适用于多种日期显示场景。
 */
function formatDate(date, format = 'yyyy/MM/dd hh:mm:ss', locale = 'zh') {
    // 确保传入的date是一个Date对象
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
  
    // 检查日期是否有效
    if (isNaN(date.getTime())) {
      throw new Error('Invalid Date');
    }
  
    // 定义格式化函数
    const pad = (num) => String(num).padStart(2, '0');
  
    // 根据locale确定语言
    const monthNames = {
      zh: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
    const dayNames = {
      zh: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };
  
    // 解析format字符串
    const replacements = {
      'yyyy': date.getFullYear(),
      'yy': pad(date.getFullYear() % 100),
      'MM': pad(date.getMonth() + 1),
      'M': date.getMonth() + 1,
      'dd': pad(date.getDate()),
      'd': date.getDate(),
      'hh': pad(date.getHours()),
      'h': date.getHours(),
      'mm': pad(date.getMinutes()),
      'm': date.getMinutes(),
      'ss': pad(date.getSeconds()),
      's': date.getSeconds(),
      'SSS': pad(date.getMilliseconds(), 3),
      'S': date.getMilliseconds(),
      'MMMM': monthNames[locale][date.getMonth()],
      'MMM': monthNames[locale][date.getMonth()].substring(0, 3),
      'dddd': dayNames[locale][date.getDay()],
      'ddd': dayNames[locale][date.getDay()].substring(0, 3)
    };
  
    // 替换format字符串中的占位符
    return format.replace(/\b([a-zA-Z])\1*\b/g, (match) => replacements[match] || match);
  }
  
  // 使用示例
//   const formattedDate = formatDate(new Date(), 'yyyy年M月d日 hh:mm:ss', 'zh');
//   console.log(formattedDate); // 输出格式化后的日期