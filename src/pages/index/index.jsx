import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config';
import PageTitle from '../../components/organisms/PageTitle'

const { publicRuntimeConfig } = getConfig();

const Home = () => {
  return (
    <div className="text-center">
      <PageTitle title="zones" />
      <p>Welcome to the boilerplate React app using NextJS!</p>
      <p>
        Try navigating to
        <br />
        <Link href={`${publicRuntimeConfig.basePath}/example/second-page`}><a>another page</a></Link>
        <br />
        and observe the URL changing
      </p>
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

export default Home
