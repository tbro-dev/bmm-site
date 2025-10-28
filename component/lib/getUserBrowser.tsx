'use client';
import { useEffect, useState } from 'react';

interface BrowserInfo {
    name: string;
    version: string;
}

const getUserBrowser = (): BrowserInfo | null => {
    const [browser, setBrowser] = useState<BrowserInfo | null>(null);

    useEffect(() => {
        if (typeof navigator === 'undefined') return;

        const getBrowserInfo = async (): Promise<BrowserInfo> => {
            // Prefer modern API (userAgentData)
            const uaData = (navigator as any).userAgentData;
            if (uaData && uaData.brands) {
                const brand = uaData.brands.find((b: any) =>
                    /Chrome|Edge|Opera|Safari|Firefox/i.test(b.brand)
                );
                const name = brand?.brand || 'Unknown';
                const version = brand?.version || '';
                return { name, version };
            }

            // Fallback to userAgent parsing
            const ua = navigator.userAgent;
            let tem: RegExpMatchArray | null;
            let M: RegExpMatchArray | null = ua.match(
                /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            );

            if (M && /trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua);
                return { name: 'IE', version: tem?.[1] || '' };
            }

            if (M && M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edg)\/(\d+)/);
                if (tem) {
                    return { name: tem[1] === 'OPR' ? 'Opera' : 'Edge', version: tem[2] };
                }
            }

            if (!M) {
                return { name: navigator.appName, version: navigator.appVersion };
            }

            if ((tem = ua.match(/version\/(\d+)/i))) {
                M.splice(1, 1, tem[1]);
            }

            return { name: M[1] || M[0], version: M[2] || '' };
        };

        getBrowserInfo().then(setBrowser);
    }, []);

    return browser;
};

export default getUserBrowser;