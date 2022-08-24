import type { NextPage } from 'next'

import Head from 'next/head'

import Layout from '@components/Layout'
import Section from '@components/Section'

import homeContent from '@lang/home.json'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter()
  const { pathname, asPath, query, locale, locales, defaultLocale } = router

  const t = locale === 'es' ? 'es' : 'en';

  const { title, content } = homeContent[t]


  return (
    <Layout>

      <Head>
        <title>Fentos Website</title>
        <meta name="description" content="Fentos' project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Section>
        <h1>{title}</h1>
        <div>{content.title}</div>
      </Section>

    </Layout>
  )
}

export default Home

