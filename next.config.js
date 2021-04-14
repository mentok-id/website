const nextCompose = require('next-compose-plugins')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

const withImages = require('next-images')

const nextConfig = {
  // distDir: 'build',
  trailingSlash: true,
  [PHASE_PRODUCTION_BUILD]: {
    target: 'serverless',
  }, 
  images: {
    domains: ['storage.googleapis.com','source.unsplash.com'],
  },
  // webpack: webpackConfig,
};


module.exports = nextCompose([withImages], nextConfig)