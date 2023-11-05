/** @type {import('next').NextConfig} */
const env = process.env.ENV || 'development';

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
      sharp: 'commonjs sharp', canvas: 'commonjs canvas' 
    })
    return config
  },
  development: {
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.techbazaar.pk',
        
      },
      {
        protocol: 'https',
        hostname: 'staging.cdn.techbazaar.pk',
      }, {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
    // domains: ['localhost', 'https://ca.slack-edge.com', 'cdn.techbazaar.pk', 'www.bolnews.com','staging.cdn.techbazaar.pk'],

  },
  cssModules: true,
  // distDir: "build",
    env: {
      NEXT_PUBLIC_MARKETPLACE_ENV: 'development',
      NEXT_PUBLIC_MARKETPLACE_API_URL: 'http://localhost:8000/api',
      NEXT_PUBLIC_FACEBOOK_APP_ID: '659536409027061',
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: '569077389652-03t6u2dbvrkdmosb24g6ej7f5e00n8uu.apps.googleusercontent.com',
      NEXT_PUBLIC_GOOGLE_MAP_API_KEY: 'AIzaSyAbR84bxhw_nwO2B55Dv5DwtLcU9K2D20Y',
      NEXT_PUBLIC_MARKETPLACE_CDN: 'http://localhost:5001',
      // NEXT_PUBLIC_SITE_KEY:'6LeEDuMoAAAAAPopi4k1TcJM7Z38VBLSITvrYAuy',
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "6LfnoeMoAAAAAJBrkJeQjqsR0Saf10oI2v7rhu7N"


    },
  },
  staging: {
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.techbazaar.pk',
        
      },
      {
        protocol: 'https',
        hostname: 'staging.cdn.techbazaar.pk',
      }
    ],
    // domains: ['localhost', 'https://ca.slack-edge.com', 'cdn.techbazaar.pk', 'www.bolnews.com','staging.cdn.techbazaar.pk'],

  },
  cssModules: true,
  // distDir: "build",
    env: {
      NEXT_PUBLIC_MARKETPLACE_ENV: 'staging',
      NEXT_PUBLIC_MARKETPLACE_API_URL: 'https://staging.api-marketplace.techbazaar.pk/api',
      NEXT_PUBLIC_FACEBOOK_APP_ID: '687526206770710',
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: '569077389652-03t6u2dbvrkdmosb24g6ej7f5e00n8uu.apps.googleusercontent.com',
      NEXT_PUBLIC_GOOGLE_MAP_API_KEY: 'AIzaSyAbR84bxhw_nwO2B55Dv5DwtLcU9K2D20Y',
      NEXT_PUBLIC_MARKETPLACE_CDN: 'https://cdn.techbazaar.pk',
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "6LfnoeMoAAAAAJBrkJeQjqsR0Saf10oI2v7rhu7N"

    },
  },
  UAT: {
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.techbazaar.pk',
        
      },
      {
        protocol: 'https',
        hostname: 'uat.cdn.techbazaar.pk',
      }
    ],
    // domains: ['localhost', 'https://ca.slack-edge.com', 'cdn.techbazaar.pk', 'www.bolnews.com','staging.cdn.techbazaar.pk'],

  },
  cssModules: true,
  // distDir: "build",
    env: {
      NEXT_PUBLIC_MARKETPLACE_ENV: 'UAT',
      NEXT_PUBLIC_MARKETPLACE_API_URL: 'https://uat.api-marketplace.techbazaar.pk/api',
      NEXT_PUBLIC_FACEBOOK_APP_ID: '687526206770710',
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: '569077389652-03t6u2dbvrkdmosb24g6ej7f5e00n8uu.apps.googleusercontent.com',
      NEXT_PUBLIC_GOOGLE_MAP_API_KEY: 'AIzaSyAbR84bxhw_nwO2B55Dv5DwtLcU9K2D20Y',
      NEXT_PUBLIC_MARKETPLACE_CDN: 'https://uat.cdn.techbazaar.pk',
    },
  },
  production: {
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.techbazaar.pk',
        
      },
      {
        protocol: 'https',
        hostname: 'staging.cdn.techbazaar.pk',
      }
    ],
    // domains: ['localhost', 'https://ca.slack-edge.com', 'cdn.techbazaar.pk', 'www.bolnews.com','staging.cdn.techbazaar.pk'],

  },
  cssModules: true,
  // distDir: "build",
    env: {
      NEXT_PUBLIC_MARKETPLACE_ENV: 'production',
      NEXT_PUBLIC_MARKETPLACE_CDN: 'https://cdn.techbazaar.pk',
    },
  },
}[env]





module.exports = nextConfig
