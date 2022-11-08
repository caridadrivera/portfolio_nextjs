import React, {useState, useEffect} from 'react'


export default function projects() {
  const [currentProjectClick, setCurrentProjectClick] = useState(false);
  const [pastProjectsClick, setPastProjectsClick] = useState(false);

  useEffect(()=>{
    setCurrentProjectClick(true);
  }, [])

  return (
    <div className='flex flex-1 flex-wrap justify-evenly p-8 m-8'>
      <div className='flex flex-col'>
         <button className='bee-text text-2xl font-bold bg-white hover:bg-yellow-300 border-4 rounded' 
          onClick={()=> {
            if(!currentProjectClick){
              setCurrentProjectClick(true)
              setPastProjectsClick(false)
            }else {
              setCurrentProjectClick(false)
            }} 
        }> My Current Projects</button>

      {currentProjectClick && 
          <div className='flex'>
            <ol>
                Journal application that uses:
                <li> <i className="fa-brands fa-react p-2"/> React's Next.js to handle routes and state</li>
                <li> <i className="fa-brands fa-css3 p-2"/> Tailwind.css for a beautiful, responsive UI</li>
                <li> <i className="fa-sharp fa-solid fa-database p-2"/> Firebase's firestore to persist data</li>
                <li> Project code: <a href="https://github.com/caridadrivera/nextJs_tailwind_journal" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-2xl p-8" alt="github-link"></i>
                    </a> 
                </li>
            </ol>
           
          </div>}
      </div>

      
     
   <div className='flex flex-col'>
      <button className='bee-text text-2xl  border-4 bg-white hover:bg-yellow-300 rounded' onClick={()=> { 
          if(!pastProjectsClick){
            setPastProjectsClick(true)
            setCurrentProjectClick(false)
          } else {
            setPastProjectsClick(false)
          }}} 
          > My Past Projects
      </button>

      {pastProjectsClick && 
          <div className='flex'>
             <ol>
                <li className='flex justify-evenly'> 
                  <i className="fa-brands fa-react p-2"/> React.js Movie Search with external API
                     <a href="https://github.com/caridadrivera/react-movie-search" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-lg pl-4" alt="github-link"></i></a> 

                      <a href="https://www.youtube.com/watch?v=Otcgs3BfJnA" target="_blank">
                      <i class="fa-brands fa-youtube fa-lg pl-4"></i></a>
                </li>


                <li className='flex justify-evenly'> 
                  <i className="fa-regular fa-gem p-2 "/> Mindful Ruby on Rails and Postgres SQL
                     <a href="https://github.com/caridadrivera/mindful-rails-app" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-lg pl-4" alt="github-link"></i></a> 

                      <a href="https://www.youtube.com/watch?v=rAKMoulJ7NQ" target="_blank">
                      <i class="fa-brands fa-youtube fa-lg pl-4"></i></a>
                </li>

                <li className='flex justify-evenly'> 
                  <i class="fa-brands fa-js p-2"/> Tile-matching Javascript and Rails App
                     <a href="https://github.com/caridadrivera/tile-matching-game-JS" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-lg pl-4" alt="github-link"></i></a> 

                      <a href="https://www.youtube.com/watch?v=98ledb3KwcI" target="_blank">
                      <i class="fa-brands fa-youtube fa-lg pl-4"></i></a>
                </li>

                <li className='flex'>
                   <i className="fa-brands fa-react p-2"/> React.js Tic Tac Toe game
                     <a href="https://github.com/caridadrivera/React-tic-tac-toe" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-lg pl-4" alt="github-link"></i></a>    
                </li>

                <li className='flex'> 
                  <i className="fa-brands fa-react p-2"/> Old Portfolio Website
                     <a href="https://github.com/caridadrivera/portfolio-rivera" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-lg pl-4" alt="github-link"></i></a>    
                </li>

                

             </ol>
          </div>}
     </div>

    </div>
  )
}
