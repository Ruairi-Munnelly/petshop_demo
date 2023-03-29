import React from "react";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>Swagger Petstore</title>
        <meta name="description" content="Smartbear petshop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}