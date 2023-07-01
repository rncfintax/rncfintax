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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BMH4SJXPZD"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || []
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date())
          gtag('config', 'G-BMH4SJXPZD')
          `
        }}/>
      </Head>
      <body className='text-slate-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
