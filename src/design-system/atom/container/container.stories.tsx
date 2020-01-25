import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import Container from './container'
import mdx from './container.stories.mdx'

export default {
  title: 'atom|Container',
  component: Container,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '컨테이너 컴포넌트',
    docs: {
      page: mdx,
    },
  },
}
