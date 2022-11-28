import React from 'react'

export default function experience() {
  return (    
 <div className='flex text-md  justify-evenly'> 
    <div className='flex-col ml-8 text-fade animation ease 8s'>
      <span className='bee-text font-bold text-2xl'>Tech Stach: </span>  
        <ol className='list-disc pl-5 pb-5'>
          <li> HTML, Tailwind.css, MaterialUI</li>
          <li> Javascript and some of it's frameworks and libraries like React.js, Angular.js and Next.js </li>
          <li> Building backend and API support with Ruby, Ruby on Rails and PostGres as well as C# and SQL </li>
        </ol>  
      <span className='flex flex-1'> I also have experience debugging, API and UIs with:</span> 
        <ol className='list-disc pl-5'>
          <li> Google Chrome Dev Tools</li>
          <li> Visual Studio Code</li>
        </ol>

        <div className='flex flex-1 flex-wrap p-8 m-8 justify-between text-fade animation ease 8s'> 
          <i className="fa-brands fa-html5 fa-6x "/>
          <i className="fa-brands fa-css3 fa-6x "/>
          <i className="fa-brands fa-js fa-6x text-fade"/>
          <i className="fa-brands fa-react fa-6x "/>
          <i className="fa-brands fa-angular fa-6x"/>
       </div>
    </div>

      <div className='flex-col ml-8 text-fade animation ease 8s'>
        <span className='bee-text font-bold text-2xl'>Work: </span>
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
      
     
    </div>
  )
}
