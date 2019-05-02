const config = {
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
}

if (process.env.CONTEXT === "production") {
  const googleAnalyticsConfig = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-139405922-1",
    },
  }
  config.plugins.push(googleAnalyticsConfig)
}

module.exports = config
