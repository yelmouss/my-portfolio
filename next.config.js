/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kanapro.vercel.app'
            },
            {
                protocol: 'https',
                hostname: 'p7-yelmouss.vercel.app'
            },
            {
                protocol: 'https',
                hostname: 'agencelapanthere.vercel.app'
            },
            {
                protocol: 'https',
                hostname: 'placehold.co'
            },
            {
                protocol: 'https',
                hostname: 'api.microlink.io'
            },
            {
                protocol: 'https',
                hostname: 'udemy-certificate.s3.amazonaws.com'
            }
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },
    
    // Disable server-side rendering for specific packages that use browser APIs
    transpilePackages: ["react-schemaorg", "schema-dts"],
    
    // Configure Webpack to handle browser-only modules
    webpack: (config, { isServer }) => {
        // Add condition to handle browser-only modules
        if (isServer) {
            // For modules that should be skipped during SSR
            const origExternal = config.externals;
            config.externals = [
                ...(Array.isArray(origExternal) ? origExternal : [origExternal]),
                "react-schemaorg", 
                "schema-dts"
            ];
        }
        
        return config;
    },
    
    // Set strict mode for React development
    reactStrictMode: true,
    
    // Enable SWC minification for improved performance
    swcMinify: true,
}

module.exports = nextConfig