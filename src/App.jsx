import { CalendarMinus } from "lucide-react"
import Projets from "./sections/Projets"
import Header from "./sections/Header"
import Competences from "./sections/Competences"

import Hero from "./sections/Hero"
import DarkVeil from './components/DarkVeil';


export default function App() {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
                theme: {
                    extend: {
                        fontFamily: {
                            sans: ['Poppins', 'system-ui', 'sans-serif'],
                        },
                    }
                }
            }
          `,
        }}
      />
    <div className="aboslute">
    {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <DarkVeil />
    </div> */}
      <Hero />
      <Header />
      <Competences />

    </div>
    
    </>
  )
}
