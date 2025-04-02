/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'kanapro.vercel.app',
            'p7-yelmouss.vercel.app',
            'agencelapanthere.vercel.app',
            'placehold.co',
            'api.microlink.io',
            'udemy-certificate.s3.amazonaws.com'  // Fixed: removed "https:/" prefix
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },
}

module.exports = nextConfig