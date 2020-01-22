import React from 'react'
import Link from 'next/link'
import Router from 'next/router';
import getConfig from 'next/config';
import PageTitle from '../../../components/organisms/PageTitle'

const { publicRuntimeConfig } = getConfig()

const SecondPage = () => {
  const handler = () => {
    Router.push(`${publicRuntimeConfig.basePath}/`);
  }
  return (
    <div className="text-center">
      <PageTitle title="Second Page - zones" />
      <main>
        <p>This is another page at a different URL.</p>
        <p>
          Return to the
          <br />
          <Link href="/"><a>homepage</a></Link>
        </p>
        <button onClick={handler}>Go Home</button>
      </main>
      <style jsx global>
        {`
          .text-center {
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}

export default SecondPage
