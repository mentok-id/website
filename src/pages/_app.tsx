import Meta from "@app/components/atoms/Meta"
import NoScript from "@app/components/atoms/NoScript"
import React from "react"
import "../assets/scss/global.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <NoScript />
    </>
  )
}

export default MyApp
