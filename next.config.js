module.exports = {
  async rewrites() {
    return [
      {
        source: '/amb',
        destination: '/middleware/ab-test',
      },
      {
        source: '/amb/:path*',
        destination: '/:path*',
      },
    ];
  },
};
