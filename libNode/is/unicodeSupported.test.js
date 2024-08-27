import { describe, it, expect, vi } from 'vitest';
import unicodeSupported from './unicodeSupported';

describe('unicodeSupported', () => {
    const originalPlatform = process.platform;
    const originalEnv = { ...process.env };

    afterEach(() => {
        // Restore the original process.platform and process.env after each test
        Object.defineProperty(process, 'platform', { value: originalPlatform });
        process.env = { ...originalEnv };
    });

    it('should return true on non-win32 platforms unless TERM is linux', () => {
        Object.defineProperty(process, 'platform', { value: 'darwin' });
        process.env.TERM = 'xterm-256color';
        expect(unicodeSupported()).toBe(true);

        process.env.TERM = 'linux';
        expect(unicodeSupported()).toBe(false);
    });

    it('should return true on win32 platform with certain environment variables set', () => {
        Object.defineProperty(process, 'platform', { value: 'win32' });

        process.env.WT_SESSION = '1';
        expect(unicodeSupported()).toBe(true);
        delete process.env.WT_SESSION;

        process.env.TERMINUS_SUBLIME = '1';
        expect(unicodeSupported()).toBe(true);
        delete process.env.TERMINUS_SUBLIME;

        process.env.ConEmuTask = '{cmd::Cmder}';
        expect(unicodeSupported()).toBe(true);
        delete process.env.ConEmuTask;

        process.env.TERM_PROGRAM = 'Terminus-Sublime';
        expect(unicodeSupported()).toBe(true);
        delete process.env.TERM_PROGRAM;

        process.env.TERM_PROGRAM = 'vscode';
        expect(unicodeSupported()).toBe(true);
        delete process.env.TERM_PROGRAM;

        process.env.TERM = 'xterm-256color';
        expect(unicodeSupported()).toBe(true);
        delete process.env.TERM;

        process.env.TERM = 'alacritty';
        expect(unicodeSupported()).toBe(true);
        delete process.env.TERM;

        process.env.TERMINAL_EMULATOR = 'JetBrains-JediTerm';
        expect(unicodeSupported()).toBe(true);
        delete process.env.TERMINAL_EMULATOR;

        // Ensure it returns false if none of the variables are set
        expect(unicodeSupported()).toBe(false);
    });
});
