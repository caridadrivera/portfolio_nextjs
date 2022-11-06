import Head from 'next/head'
import Image from 'next/image'
import myPic from './profile.jpeg'


export default function Home() {
  return (
    <div className="hex">
      <div className='hex-background'>
      <Image 
          src={myPic} 
          alt="my profile picture"
    
      />
      </div>
   

    </div>
  )
}
