/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Short links printed as QR codes on partner flyers. Keep these stable:
  // the flyers are already printed. Partner names live in lib/turning3.ts.
  async redirects() {
    const partners = ['arc-moco'];
    const short = { 'arc-moco': 'arc' };
    return partners.flatMap(p => [
      { source: `/go/${short[p]}`,    destination: `/turning3?utm_source=${p}&utm_medium=flyer&utm_campaign=turning3`,    permanent: false },
      { source: `/go/${short[p]}-es`, destination: `/es/turning3?utm_source=${p}&utm_medium=flyer&utm_campaign=turning3`, permanent: false },
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
