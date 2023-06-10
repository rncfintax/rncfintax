import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" type="image/png" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <body className='text-slate-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
