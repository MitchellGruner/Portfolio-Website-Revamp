import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <link rel="shortcut icon" href="/favicon/favicon.ico?v=1" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
