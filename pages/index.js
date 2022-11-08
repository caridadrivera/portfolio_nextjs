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
                alt=""
            />
        </div>
      </div>
      <h1 className=' flex flex-1 text-3xl ml-8 font-extrabold  text-slate-500  '> 
        Caridad Rivera
      </h1>
      <span className='flex flex-1 ml-8 text-slate-500  font-bold'>
        Software Engineer, critical thinker, fast-learner.
      </span>
      
    
    </>
   
    
  )
}
