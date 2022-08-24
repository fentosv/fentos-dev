import type { GetStaticProps, NextPage } from 'next'

import Head from 'next/head'

import Button from '@components/Button'
import Layout from '@components/Layout'
import Section from '@components/Section'
import { useState } from 'react'


interface Context {
  locale: string,
  locales: string[],
  defaultLocale: string,
}
interface Props {
  context: Context
}

const Home: NextPage<Props> = (props) => {

  const { locale, locales, defaultLocale } = props.context;
  console.log(locale, locales, defaultLocale);


  const [first, setfirst] = useState('second')

  return (
    <Layout>

      <Head>
        <title>Fentos | NextJS & TypeScript</title>
        <meta name="description" content="Fentos' project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section test={false}>
        <Button
          text='Click me!'
          displayName='Fentos'
          arrayNum={[1, 2, 3, 4]}
          name='button_1'
          mode='rounded'
        // disabled={true}
        />
      </Section>

    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { context },
  };
}