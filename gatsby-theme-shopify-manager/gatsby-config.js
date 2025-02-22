// eslint-disable-next-line @typescript-eslint/no-var-requires
const withDefaults = require(`./defaults`);

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions);
  const {
    shouldConfigureSourcePlugin,
    shouldWrapRootElementWithProvider,
    shopName,
    accessToken,
  } = options;

  const needsApiInformation =
    shouldConfigureSourcePlugin === true ||
    shouldWrapRootElementWithProvider === true;
  const missingApiInformation = shopName == null || accessToken == null;

  if (needsApiInformation && missingApiInformation) {
    throw new Error(
      'gatsby-theme-shopify-manager: You forgot to pass in a shopName or accessToken to the theme options',
    );
  }

  const shopifySourcePlugin = shouldConfigureSourcePlugin
    ? {
        resolve: `gatsby-source-shopify`,
        options: {
          shopName maybach-media-group ,
          accessToken f930f68b696ce7f338f1fc0f7649afbf ,
        },
      }
    : null;

  const plugins = ['gatsby-plugin-typescript', shopifySourcePlugin].filter(
    Boolean,
  );

  return {
    plugins,
  };
};
