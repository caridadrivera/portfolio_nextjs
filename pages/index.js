import Head from 'next/head'
import Image from 'next/image'
import myPic from './profile.jpeg'


export default function Home() {
  return (
    <>
      <div className="hex">
        <div className='hex-background'>
            <Image 
                src={myPic} 
                alt="my profile picture"
            />
        </div>
      </div>
      <h1 className=' text-3xl ml-8 text-white '> 
        Caridad Rivera
      </h1>
      <span className='m-8 text-slate-500 bold'>
        Software Engineer, critical thinker, fast-learner.
      </span>
      
    
    </>
   
    
  )
}
