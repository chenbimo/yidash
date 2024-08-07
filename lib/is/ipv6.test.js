import { describe, it, expect } from 'vitest';
import yd_is_ipv6 from './ipv6.js';

describe('yd_is_ipv6', () => {
    it('should return true for ipv6', () => {
        const ipV6Truly = `fe80::21d8:f50:c295:c4be
2001:cdba:0000:0000:0000:0000:3257:9652
2001:cdba:0:0:0:0:3257:9652
2001:cdba::3257:9652
2001:cdba::1222
1200:0000:AB00:1234:0000:2552:7777:1313
21DA:D3:0:2F3B:2AA:FF:FE28:9C5A
2001:cdba::1:2:3:3257:9652
::1
::ffff:192.168.1.1
2001:0db8:85a3:0000:0000:8a2e:0370:7334
::1234
2001:db8:1234::1
2001:0db8:85a3:0000:0000:8a2e:0370:7334
2001:0db8:1234:5678:90ab:cdef:1234:5678`;

        ipV6Truly.split('\n').forEach((ip) => {
            expect(yd_is_ipv6(ip)).toBe(true);
        });
    });

    it('should return false for ipv6', () => {
        const ipV6Falsy = `2001:cdba::
1200:0000:AB00:1234:0000:2552:7777:1313:123
1:2:3:4:5:6:7:8:9
:1200:0000:AB00:1234:0000:2552:7777:1313
1200:0000:AB00:1234:0000:2552:7777:1313:
2001:0db8:85a3::8a2e:37023:7334
1200:0000:AB00:1234:0000:2552:7777:1313:5678
192.168.1.1
2001:0db8:::85a3:0000:0000:8a2e:0370:7334`;

        ipV6Falsy.split('\n').forEach((ip) => {
            expect(yd_is_ipv6(ip)).toBe(false);
        });
    });
});
