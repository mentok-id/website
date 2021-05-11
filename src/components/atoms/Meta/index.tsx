import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <Head>
      <title>Mentok.id | Coming Soon</title>
      {/* Need Change to NEXT-SEO Package */}
      <meta name="title" content="Mentok.id — Coming Soon" />
      <meta name="google-site-verification" content="aBcoELgijEZRXXIqNxrTjLAzr3cJIev8yOAfQL_kf6E" />
      <meta
        name="description"
        content="Mentok adalah platform dari komunitas untuk komunitas yang lebih besar."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mentok.id/" />
      <meta property="og:title" content="Mentok.id — Coming Soon" />
      <meta
        property="og:description"
        content="Mentok adalah platform dari komunitas untuk komunitas yang lebih besar."
      />
      {/* <meta property="og:image" content="https://mentok.id/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /> */}

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mentok.id/" />
      <meta property="twitter:title" content="Mentok.id — Coming Soon" />
      <meta
        property="twitter:description"
        content="Mentok adalah platform dari komunitas untuk komunitas yang lebih besar."
      />
      {/* <meta property="twitter:image" content="https://mentok.id/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"> */}
      
      {/* Google Tag Manager Start */}
      <script dangerouslySetInnerHTML={{
        __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MTHC8MR');</script>
      `}} />
      {/* Google Tag Manager End */}
    </Head>
  )
}

export default index
