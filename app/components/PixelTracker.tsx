'use client';

import { useEffect } from 'react';

export default function PixelTracker() {
  useEffect(() => {
    // Facebook Pixel
    const fbPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    if (fbPixelId) {
      (window as any).fbq('init', fbPixelId);
      (window as any).fbq('track', 'PageView');
    }

    // Google Analytics
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
    if (gaId) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(arguments);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaId);
    }
  }, []);

  return null;
}
