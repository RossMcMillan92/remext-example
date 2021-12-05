module.exports = {
  i18n: {
    locales: ['en-GB'],
    defaultLocale: 'en-GB',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      }
    }

    return config
  },
}
