import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Button } from '@storybook/react/demo'
import mdx from './button.stories.mdx'

export default {
  title: 'button', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
  parameters: {
    componentSubtitle: '버튼 컴포넌트',
    docs: {
      page: mdx,
    },
  },
}
