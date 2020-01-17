import React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface MyDocumentProps extends DocumentProps {
  styleTags?: string
}

function MyDocument({ styleTags }: MyDocumentProps) {
  return (
    <html>
      <Head>{styleTags}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)
  /* pre render styled component */
  const sheet = new ServerStyleSheet()
  const page = ctx.renderPage((App) => (props) =>
    sheet.collectStyles(
      <>
        <App {...props} />
      </>,
    ),
  )
  const styleTags = sheet.getStyleElement()

  return { ...initialProps, ...page, styleTags }
}

export default MyDocument
