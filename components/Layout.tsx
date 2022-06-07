import Head from 'next/head'
import Script from 'next/script';
import {PropsWithChildren} from "react";
import styles from '../styles/Home.module.scss'

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children  }: PropsWithChildren<any>) {
  return (
      <>
        <Head>
          <title>My awesome store</title>
          <link rel="preconnect" href="https://app.snipcart.com"/>
          <link rel="preconnect" href="https://cdn.snipcart.com"/>
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
          <link rel="shortcut icon" href="../public/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
        <div hidden id="snipcart" data-api-key="NjFiYWE3ODAtNmE0MS00ZDcyLTk1NDEtMmJiZjk0Y2ZkNzE4NjM3ODcyOTQ1NzIzMjAyMTEy" data-config-modal-style="side"></div>
      </>
  )
}