const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: '**.wikimedia.org',
      },
    ],
    unoptimized: true, // Disable image optimization for external URLs
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;