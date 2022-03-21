import Head from 'next/head'
import Image from 'next/image'
import Job from './components/job'
import Menu from './components/menu'

export default function jobs() {
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
      <Job className='col-span-2'/>

      
    </main>


    </div>
  )
}
