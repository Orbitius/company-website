import Navbar from "../components/navbar/Navbar"
import Head from "next/head" 

export default function Home() { 

  const home = {
    video:`
      280:w-[100%]
      280:h-[100%]
    `
  }
  return (
    <div>
       <Head>
          <meta charSet="utf-8" /> 
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app"/>
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Cabin&family=Kdam+Thmor+Pro&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet" />

          <title>Company Website</title>
      </Head> 
      <Navbar />
    </div>
  )
} 