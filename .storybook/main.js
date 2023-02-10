const config = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react",
  //   "options": {}
  },
  // "docs": {
  //   "autodocs": "tag"
  // },
  "features": {
    "storyStoreV7": false
  }
};
module.exports = config
