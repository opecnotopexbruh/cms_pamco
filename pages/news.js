import Head from 'next/head'
import Image from 'next/image'
import Contact from './components/contact'
import Menu from './components/menu'
import NewsPromotion from './components/newsPromotion'

export default function News() {
  return (
    <div>
      <Head>
        <title>News and Promotions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className='grid grid-cols-3 min-h-screen'>

      {/*Menu*/}  
      <Menu className='col-span-1' />
      
      {/*Panel*/}
      <NewsPromotion className='col-span-2'/>

      
    </main>


    </div>
  )
}
