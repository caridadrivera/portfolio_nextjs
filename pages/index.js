import Head from 'next/head'
import Image from 'next/image'
import myPic from './profile.jpeg'


export default function Home() {
  return (
  <>
  <div className='flex flex-col w-screen h-screen m-8 p-8 bg-yellow shadow-xl '>      
     <h1 className='flex justify-center text-3xl m-8 font-extrabold'>Caridad Rivera</h1> 
          <div className="hexagon">
            <div className='hexagon-background'>
              <Image 
                src={myPic} 
                alt=""
                  />
            </div>
          </div>
             <p className='text-fade animation ease 5s text-center p-8 m-8'>Software Engineer, critical thinker and fast-learner with a track record of translating design to code and building responsive, intuitive UIs.
              <hr className='my-8 h-px bg-gray-200 border-0 dark:bg-gray-700'/> I believe code is art and it has served as a tool of expression for me, which has allowed me to learn and grow while also having fun.</p>

       
       
  </div>  
</>
    
  )
}
