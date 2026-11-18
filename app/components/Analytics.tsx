'use client';

import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    // Facebook Pixel Script
    const fbPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    if (fbPixelId) {
      (window as any).fbq = (window as any).fbq || function() {
        (window as any).fbq.callMethod ? (window as any).fbq.callMethod.apply((window as any).fbq, arguments) : (window as any).fbq.queue.push(arguments);
      };
      (window as any).fbq.push = (window as any).fbq;
      (window as any).fbq.loaded = true;
      (window as any).fbq.version = '2.0';
      (window as any).fbq.queue = [];

      const fbScript = document.createElement('script');
      fbScript.async = true;
      fbScript.src = `https://connect.facebook.net/en_US/fbevents.js`;
      document.head.appendChild(fbScript);

      setTimeout(() => {
        (window as any).fbq('init', fbPixelId);
        (window as any).fbq('track', 'PageView');
      }, 100);
    }

    // Google Analytics Script
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
    if (gaId) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(gaScript);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(arguments);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaId, { 'anonymize_ip': true });
    }

    // Track plan clicks / contact clicks.
    // `value` debe ser numérico (precio real del plan en MXN) para que GA4 lo
    // pueda usar como valor de conversión -- nunca el nombre del plan como string.
    const trackEvent = (planName: string, value?: number) => {
      if ((window as any).fbq) {
        const fbParams: Record<string, unknown> = { content_name: planName };
        if (typeof value === 'number') {
          fbParams.value = value;
          fbParams.currency = 'MXN';
        }
        (window as any).fbq('track', 'Lead', fbParams);
      }
      if ((window as any).gtag) {
        const gaParams: Record<string, unknown> = { plan_name: planName };
        if (typeof value === 'number') {
          gaParams.value = value;
          gaParams.currency = 'MXN';
        }
        (window as any).gtag('event', 'generate_lead', gaParams);
      }
    };

    (window as any).trackPlanEvent = trackEvent;
  }, []);

  return null;
}
