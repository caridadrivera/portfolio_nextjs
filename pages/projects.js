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
            <div className='flex flex-col'>
              <ol className='m-8'>
                <li className='list-disc'> Journal application with:</li> 
                  <li> <i className="fa-brands fa-react p-2"/> React's Next.js to handle user navigation routes and state</li>
                  <li> <i className="fa-brands fa-css3 p-2"/> Tailwind.css and some custom CSS for stylish and fully responsive UI </li>
                  <li> <i className="fa-sharp fa-solid fa-database p-2"/> Firebase's firestore to persist data</li>
                  <li className='p-2'> Project code: <a href="https://github.com/caridadrivera/nextJs_tailwind_journal" target="_blank"> 
                        <i className="fa-brands fa-square-github fa-xl p-4" alt="github-link"></i>
                      </a> 
                  </li>

                  <li className='list-disc'> This portfolio with: </li> 
                  <li> <i className="fa-brands fa-react p-2"/> Next.js for seamless navigation between components, React.js to attain seamless user interaction </li>
                  <li> <i className="fa-brands fa-css3 p-2"/> Tailwind.css for a easy, beautiful, and responsive UI</li>
                  <li className='p-2'> Project code: <a href="https://github.com/caridadrivera/portfolio_nextjs" target="_blank"> 
                        <i className="fa-brands fa-square-github fa-xl p-4" alt="github-link"></i>
                      </a> 
                  </li>
              </ol>     
            </div>}
        </div>

          
    <div className='flex flex-col'>
        <button className='bee-text text-2xl border-4 bg-white hover:bg-yellow-300 rounded' onClick={()=> { 
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
             <ol className='m-8'>
                <li className='list-disc'>  React.js Movie Search with external API </li>
                  <li className='p-2'> Project code && demo:  
                        <a href="https://github.com/caridadrivera/react-movie-search"target="_blank"> 
                        <i className="fa-brands fa-square-github fa-xl pl-4" alt="github-link"></i>
                      </a> 

                      <a href="https://www.youtube.com/watch?v=Otcgs3BfJnA" target="_blank">
                      <i class="fa-brands fa-youtube fa-xl pl-4"></i></a>
                  </li>


                <li className='list-disc'> Mindful Ruby on Rails and Postgres SQL</li>
                  <li className='p-2'> Project code && demo:  
                     <a href="https://github.com/caridadrivera/mindful-rails-app" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-xl pl-4" alt="github-link"></i></a> 

                      <a href="https://www.youtube.com/watch?v=rAKMoulJ7NQ" target="_blank">
                      <i class="fa-brands fa-youtube fa-xl pl-4"></i></a>
                </li>

                <li className='list-disc'>  Tile-matching Javascript and Rails App </li>
                  <li className='p-2'> Project code && demo:  
                     <a href="https://github.com/caridadrivera/tile-matching-game-JS" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-xl pl-4" alt="github-link"></i></a> 

                      <a href="https://www.youtube.com/watch?v=98ledb3KwcI" target="_blank">
                      <i class="fa-brands fa-youtube fa-xl pl-4"></i></a>
                </li>

                <li className='list-disc'>  React.js Tic Tac Toe game</li>
                   <li className='p-2'> Project code:  
                     <a href="https://github.com/caridadrivera/React-tic-tac-toe" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-xl pl-4" alt="github-link"></i></a>    
                  </li>

                <li className='list-disc'>  Old Portfolio Website</li>
                  <li className='p-2'> Project code:  
                     <a href="https://github.com/caridadrivera/portfolio-rivera" target="_blank"> 
                      <i className="fa-brands fa-square-github fa-xl pl-4" alt="github-link"></i></a>    
                 </li>

                

             </ol>
          </div>}
     </div>

    </div>
  )
}
