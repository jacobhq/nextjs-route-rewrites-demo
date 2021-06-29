module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
          {
              source: '/es/nosotros',
              destination: '/es/about-us',
          }
        ]
      }
}
