import React from 'react'

export default function Education() {
  return (
      <div className='flex justify-evenly border border-black'>  
        <div className='flex flex-col '>
          <span className='bee-text text-2xl font-bold'>Education </span>
          <span className='font-bold'>Flatiron Software Engineering Bootcamp</span>                
              <ol className='list-disc pl-5 pb-5'>     
                <li> Studied in the immersive, 15 week-in-person program, creating a variety of web-based applications from scratch to build strong web-development skills </li>
                <li> Practiced building projects in a variety of web development languages, frameworks, and libraries in-depth, including Ruby, Rails,  Javascript, jQuery, SQL, ActiveRecord, Git, HTML, CSS, React, and Redux </li>
                <li> Built individual and paired projects with React.js, Ruby, SQL and Bootstrap</li>
              </ol>
        </div>

      </div>
  )
}
  