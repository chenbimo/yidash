import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import yd_browser_isMobileDevices from './isMobileDevice.js';

describe('yd_browser_isMobileDevices', () => {
    let originalNavigator;

    beforeEach(() => {
        originalNavigator = global.navigator;
    });

    afterEach(() => {
        global.navigator = originalNavigator;
    });

    it('should return true for mobile user agents', () => {
        const mobileUserAgents = ['Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1', 'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36', 'Mozilla/5.0 (iPad; CPU OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1', 'Mozilla/5.0 (webOS/1.4.5; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0', 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.36 (KHTML, like Gecko) Version/10.3.1.634 Mobile Safari/537.36'];

        mobileUserAgents.forEach((userAgent) => {
            global.navigator = { userAgent };
            expect(yd_browser_isMobileDevices()).toBe(true);
        });
    });

    it('should return false for non-mobile user agents', () => {
        const desktopUserAgents = ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'];

        desktopUserAgents.forEach((userAgent) => {
            global.navigator = { userAgent };
            expect(yd_browser_isMobileDevices()).toBe(false);
        });
    });
});
