module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
  presets: ['@storybook/addon-docs/preset'],
}
