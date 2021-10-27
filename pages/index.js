import Head from 'next/head'
import Avatar from '../components/avatar/Avatar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <header className="flex w-full p-5 justify-between text-sm text-gray-700">
         <div className="flex space-x-4 items-center">
           <p className="link">About</p>
           <p className="link">Store</p>
         </div>

         <div className="flex space-x-4 items-center">
           <p className="link">Gmail</p>
           <p className="link">Images</p>
         </div>



         <Avatar url="https://coaching.papareact.com/ai9"/>
     </header>
      


       
    </div>
  )
}
