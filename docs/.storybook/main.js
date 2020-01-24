module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
  presets: ['@storybook/addon-docs/preset'],
}
