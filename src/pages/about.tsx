import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '@components/Layout'
import Section from '@components/Section'

import aboutContent from '@lang/about.json'
import { useRouter } from 'next/router'

const About: NextPage = () => {

  const router = useRouter()
  const { pathname, asPath, query, locale, locales, defaultLocale } = router

  const t = locale === 'es' ? 'es' : 'en';

  const { title, content } = aboutContent[t]

  return (
    <Layout>
      <Head>
        <title>{`Fentos | ${title}`}</title>
        <meta name="description" content="Fentos' project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <h1>{title}</h1>
        <p>{content.title}</p>
      </Section>

    </Layout>
  )
}

export default About
