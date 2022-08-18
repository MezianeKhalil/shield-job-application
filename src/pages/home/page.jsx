import React from 'react'

import Head from '@components/head'
import MainLayout from '@layouts/main-layout'
import { Header, LatestJobs, GetReady } from './blocks/_index'

export default function Home () {
  return (
    <>
      <Head>
        <title>Home | Shield</title>
      </Head>
      <Header />
      <MainLayout>
        <LatestJobs />
        <GetReady />
      </MainLayout>
    </>
  )
}