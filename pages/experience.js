import React from 'react'

export default function experience() {
  return (
    
   <div className='grid ml-8 p-5 text-md  justify-evenly'>   
      <div className='flex-col ml-8 text-fade animation ease 8s'>
        <span className='bee-text font-bold text-2xl'>Experience </span>
            <div className='p-4'>
                <span className='font-bold'> Fullstack Software Developer @ Partnership To End Addiction</span> 
                <span className='text-sm italic'> January 2021 - October 2022</span>               
               <ol className='list-disc pl-5 pb-5'>
                 <li> Worked Directly with Chief of Technology to build backend platform support using C# and SQL </li>
                 <li> Built new UI features and updated existing ones with Angular.js, HTML and Bootstrap.css</li>
                 <li> Debugged APIs and loading performance issues using Google Developer Tools and Visual Studio Code Debugger</li>
               </ol>
            </div>

            <div className='p-4'>
              <span className='font-bold'> Frontend Developer @ Ladder Labs</span> 
                <span className='text-sm italic'> August 2020 - June 2021</span>               
               <ol className='list-disc pl-5 pb-5'>
                 <li> Contributed to front-end design of a single-page coupon application using React.js and Bootstrap CSS </li>
                 <li> Met with design team to discuss best ways to execute design</li>
                 <li> Tested code and prepare it for deployment</li>
               </ol>
            </div>
        </div>
        
        <div className='flex-col ml-8 text-fade animation ease 8s'> 
         <span className='bee-text text-2xl font-bold'>Education </span>
           <div className='p-4'>
                  <span className='font-bold'>Flatiron Software Engineering Bootcamp</span> 
                  <span className='text-sm italic'> January 2019 - June 2019</span>               
                <ol className='list-disc pl-5 pb-5'>     
                  <li> Studied in the immersive, 15 week-in-person program, creating a variety of web-based applications from scratch to build strong web-development skills </li>
                  <li> Practiced building projects in a variety of web development languages, frameworks, and libraries in-depth, including Ruby, Rails,  Javascript, jQuery, SQL, ActiveRecord, Git, HTML, CSS, React, and Redux </li>
                  <li> Built individual and paired projects with React.js, Ruby, SQL and Bootstrap</li>
                </ol>
           </div>

              <div className='p-4'>
                  <span className='font-bold'> St. Lawrence University </span> 
                  <span className='text-sm italic'> August 2010 - May 2014</span>               
                <ol className='list-disc pl-5 pb-5'>
                  <li> Bachelors of Arts in Anthropology </li>
                </ol>
              </div>

        </div>

     
    </div>
  )
}
