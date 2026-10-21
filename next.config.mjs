import { readFileSync } from 'node:fs';

const referrals = JSON.parse(readFileSync(new URL('./lib/referrals.json', import.meta.url), 'utf8'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Short links printed as QR codes on partner flyers: /go/<code> and
  // /go/<code>-es. Codes come from lib/referrals.json. Keep them stable: the
  // flyers are already printed.
  async redirects() {
    return Object.keys(referrals).flatMap(code => [
      { source: `/go/${code}`,    destination: `/turning3?utm_source=${code}&utm_medium=flyer&utm_campaign=turning3`,    permanent: false },
      { source: `/go/${code}-es`, destination: `/es/turning3?utm_source=${code}&utm_medium=flyer&utm_campaign=turning3`, permanent: false },
    ]);
  },
  async headers() {
    if (process.env.NODE_ENV !== 'production') return [];
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
