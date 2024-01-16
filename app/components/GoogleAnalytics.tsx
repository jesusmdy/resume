'use client';

import Script from 'next/script';
import { FC } from 'react';

const GoogleAnalytics: FC = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-FX06NDKCQ1"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-FX06NDKCQ1');
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;

