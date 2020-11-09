module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config
  },
  env: {
    cookiename: '_quarantine',
    grapqlUrl: 'http://localhost:3000/api/graphql',
    mongodbUrl: 'mongodb://127.0.0.1:27017/quarentine',
    jwtSecret: 'test'
  },
}
