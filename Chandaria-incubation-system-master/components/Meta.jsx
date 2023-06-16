import Head from "next/head";
import React from "react";
// Metta component for holding the titles acts as the head
export default function Meta({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </Head>
  );
}
