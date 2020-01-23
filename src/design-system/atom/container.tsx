import styled, { css } from 'styled-components'
import {
  marginMixin,
  paddingMixin,
  formatMarginPadding,
} from '../mixins/margin-padding'

interface ContainerProps {
  display?: string
  centered?: boolean
}

const Container = styled.div<ContainerProps>`
  ${marginMixin}
  ${paddingMixin}

  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
  
  ${({ centered }) =>
    centered && formatMarginPadding({ left: 'auto', right: 'auto' }, 'margin')}
`

export default Container
