import { describe, it, expect } from 'vitest';
import yd_is_emoji from './emoji.js';

describe('isEmoji', () => {
    it('returns true for a single emoji', () => {
        expect(yd_is_emoji('😀')).toBe(true);
    });

    it('returns true for a single emoji with modifier', () => {
        expect(yd_is_emoji('👍🏽')).toBe(true);
    });

    it('returns true for a sequence of emojis', () => {
        expect(yd_is_emoji('👨‍👩‍👧‍👦')).toBe(true);
    });

    it('should return false for numeric character "1"', () => {
        expect(yd_is_emoji('1')).toBe(false);
    });

    it('returns false for a non-emoji string', () => {
        expect(yd_is_emoji('hello')).toBe(false);
    });

    it('returns true for a string containing emojis and text', () => {
        expect(yd_is_emoji('hello 😀')).toBe(true);
    });

    it('returns true for a string with multiple emojis', () => {
        expect(yd_is_emoji('😀 👍🏽')).toBe(true);
    });

    it('returns false for an empty string', () => {
        expect(yd_is_emoji('')).toBe(false);
    });

    it('returns false for null', () => {
        expect(yd_is_emoji(null)).toBe(false);
    });

    it('returns false for undefined', () => {
        expect(yd_is_emoji(undefined)).toBe(false);
    });
});
