import { describe, it, expect } from 'vitest';
import yd_url_parse from './parse.js';
describe('yd_url_parse', () => {
    it('yd_url_parse测试', () => {
        expect(yd_url_parse('https://example.com/api/data?page=57&limit=28&sort=desc&keyword=random_abc123')).toStrictEqual({
            page: '57',
            limit: '28',
            sort: 'desc',
            keyword: 'random_abc123'
        });
    });
});
