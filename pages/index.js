import Head from 'next/head'
import Image from 'next/image'
import myPic from './profile.jpeg'


export default function Home() {
  return (
  <>
  <div className='flex flex-col w-screen h-screen'>      
     <h1 className='flex justify-center text-3xl m-8 title-text font-extrabold'>Caridad Rivera</h1> 
        <div className="hexagon">
              <Image 
                src={myPic} 
                alt=""
                  />
        </div>
      <p className='text-fade animation ease 5s text-center mt-8 md:text-clip '>Software Engineer, critical thinker and fast-learner with a track record of translating design to code and building responsive, intuitive UIs.</p>
      <hr className='mx-44 border-2 border-lime-700 ' />
      <p className='text-fade animation ease 5s text-center md:text-clip'> I believe code is art and it has served as a tool of expression for me, which has allowed me to learn and grow while also having fun.</p>     
  </div>  
</>
    
  )
}
