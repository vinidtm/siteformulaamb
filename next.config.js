module.exports = {
    async rewrites() {
      return [
        {
          source: '/amb/:path*',
          destination: '/Amb',
        },
      ];
    },
  };
