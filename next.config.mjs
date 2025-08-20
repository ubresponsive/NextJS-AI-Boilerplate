/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Skip type validation
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint errors during build
  },
  // Note: i18n configuration is not supported in App Router
  // For internationalization in App Router, use next-intl or similar libraries
};

export default nextConfig;
