import process from 'node:process';

/**
 * 是否支持unicode
 * @alias yd_is_unicodeSupported
 * @category is
 * @returns {boolean} 是否支持unicode字符
 * @author https://github.com/sindresorhus/is-unicode-supported
 * @example yd_is_unicodeSupported() // true or false
 */
export default () => {
    if (process.platform !== 'win32') {
        return process.env.TERM !== 'linux'; // Linux console (kernel)
    }

    return (
        Boolean(process.env.WT_SESSION) || // Windows Terminal
        Boolean(process.env.TERMINUS_SUBLIME) || // Terminus (<0.2.27)
        process.env.ConEmuTask === '{cmd::Cmder}' || // ConEmu and cmder
        process.env.TERM_PROGRAM === 'Terminus-Sublime' ||
        process.env.TERM_PROGRAM === 'vscode' ||
        process.env.TERM === 'xterm-256color' ||
        process.env.TERM === 'alacritty' ||
        process.env.TERMINAL_EMULATOR === 'JetBrains-JediTerm'
    );
};
