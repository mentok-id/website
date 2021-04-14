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
    </Head>
  )
}

export default index
