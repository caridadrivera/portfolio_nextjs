import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function experience() {
  return (   

   <>
    <Card sx={{ minWidth: 50 }} >
       <CardContent>
          <Typography variant="h5" component="div">
            Tech Stach:
          </Typography>
          <Typography sx={{ mt: 2.5, mb: .5 }} color="text.secondary">
            Frontend            
          </Typography>   
          <Typography variant="body2"> 
            HTML, Tailwind.css, MaterialUI
            Javascript and some of it's frameworks and libraries like React.js, Angular.js and Next.js 
          </Typography>

          <Typography sx={{ mt: 2.5, mb: .5 }} color="text.secondary">
            Backend           
          </Typography>   
          <Typography variant="body2">     
             Building backend and API support with Ruby, Ruby on Rails and PostGres as well as C# and SQL     
          </Typography>

  
          <Typography variant="body2">  
              <i className="fa-brands fa-html5 fa-6x "/>
              <i className="fa-brands fa-css3 fa-6x "/>
              <i className="fa-brands fa-js fa-6x text-fade"/>
              <i className="fa-brands fa-react fa-6x "/>
              <i className="fa-brands fa-angular fa-6x"/>      
            <br />
          </Typography>
        </CardContent>
    </Card> 


    <Card sx={{ minWidth: 50 }} >
      <CardContent>
        <Typography variant="h5" component="div">
          Work:
        </Typography>
        <Typography sx={{ mt: 2.5, mb: .5 }} color="text.secondary">
            Fullstack Software Developer @ Partnership To End Addiction
            January 2021 - October 2022             
        </Typography>   
        <Typography variant="body2"> 
          Worked Directly with Chief of Technology to build backend platform support using C# and SQL 
          Built new UI features and updated existing ones with Angular.js, HTML and Bootstrap.css
          Debugged APIs and loading performance issues using Google Developer Tools and Visual Studio Code Debugger
        </Typography>

        <Typography sx={{mt: 1.5, mb: .5 }} color="text.secondary">
            Frontend Developer @ Ladder Labs
            August 2020 - June 2021               
        </Typography>  

        <Typography variant="body2">          
            Contributed to front-end design of a single-page coupon application using React.js and Bootstrap CSS 
            Met with design team to discuss best ways to execute design
            Tested code and prepare it for deployment  
        </Typography>
      </CardContent>
    </Card> 
    
</>

  )
}
