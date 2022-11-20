import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'

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
        <div>
          <Link href='#box4'>Go to Box 4</Link>
        </div>
        <Link href='#box8'>Go to Box 8</Link>

        <div className='box-container'>
          <div className="box1">Hola: <p className="p1">Este es el  <strong className="strong1">Box 1</strong></p></div>
          <div className="box2">Box 2</div>
          <div className="box3">Box 3</div>
          <div id='box4' className="box4">Box 4</div>
          <div className="box5">Box 5</div>
          <div className="box6">Box 6</div>
          <div className="box7">Box 7</div>
          <div id='box8' className="box8">Box 8</div>
        </div>
      </Section>

    </Layout>
  )
}

export default Home

