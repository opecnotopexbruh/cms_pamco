import React from 'react'
import Menu from './components/menu'
import Head from 'next/head'
import NewJob from './components/newJob/newjob'

function AddJob() {
  return (
    <div>
      <Head>
        <title>Jobs & Apllications</title>
        <meta name="job and applications" content="job and apllication forms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <main className='grid grid-cols-3 min-h-screen'>

    {/*Menu*/}  
    <Menu className='col-span-1' />
    
    {/*Panel*/}
    <NewJob className='col-span-2'/>

  </main>


  </div>
  )
}

export default AddJob