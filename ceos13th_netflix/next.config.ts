import type { NextConfig } from 'next';
import type { RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'image.tmdb.org' }],
  },
  webpack(config) {
    const rules = config.module?.rules as RuleSetRule[];

    const fileLoaderRule = rules.find((rule) => {
      return rule.test instanceof RegExp && rule.test.test('.svg');
    });

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
