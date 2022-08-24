/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es'
  }
}

module.exports = nextConfig


