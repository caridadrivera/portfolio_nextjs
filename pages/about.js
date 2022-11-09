import React from 'react'


export default function about() {
  return (
  <div className='flex flex-wrap flex-col m-8'> 
      <div className='text-fade animation ease 5s'>
        <span className='flex flex1'>  I am Software Engineer with a passion for bringing beautiful, fast and responsive UI to life by: </span> 
            <ol className='list-disc pl-5 pb-5'>
                <li> Utilizing Front-end frameworks and libraries such as React.js, Angular.js and Next.js </li>
                <li> Building backend and API support with Ruby, Ruby on Rails and PostGres as well as C# and SQL </li>
            </ol>     
      </div>
      
      <div className='text-fade animation ease 7s'>
          <span className='flex flex-1'> && debugging API and UI issues with:</span> 
              <ol className='list-disc pl-5'>
                  <li> Google Chrome Dev Tools</li>
                  <li> Visual Studio Code</li>
              </ol>
      </div>
      

      <div className='flex flex-1 flex-wrap p-8 m-8 justify-between text-fade animation ease 8s'> 
        <i className="fa-brands fa-html5 fa-6x "/>
        <i className="fa-brands fa-css3 fa-6x "/>
        <i className="fa-brands fa-js fa-6x text-fade"/>
        <i className="fa-brands fa-react fa-6x "/>
        <i className="fa-brands fa-angular fa-6x"/>
      </div>
  </div>

  )
}
