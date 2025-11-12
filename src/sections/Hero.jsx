import { useEffect, useState } from "react";
import { CloudCheckIcon, Menu, Sun, Moon } from "lucide-react";
import AnimationGauche from "../components/AnimationGauche";
import TextType from "../components/TextType";


export default function Hero(){
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') root.classList.add('dark');
        else root.classList.remove('dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return(
      <>
      <section className="relative min-h-screen bg-gray-50 dark:bg-gray-900 flex py-20  pt-20 lg:pt-20 items-center overflow-hidden ">

        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-float-slow"></div>

        <div class="absolute top-10 w-100 h-20 bg-sky-500/30  blur-3xl animate-float-slow"></div>
        <div class="absolute w-8/10 left-50 top-50 h-1 bg-gradient-to-r from-fuchsia-500/1 via-fuchsia-500/30 to-fuchsia-500/1 animate-float-slow"></div>
        <div class="absolute w-8/10 left-50 bottom-50 h-1 bg-gradient-to-r from-fuchsia-500/1 via-fuchsia-500/30 to-fuchsia-500/1 animate-float-slow"></div>

        <div class="container mx-auto px-20 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-10">
          <AnimationGauche distance={50} direction="horizontal" delay={2}>
            <div className="max-w-3xl order-2 lg:order-1  space-y-6 text-center lg:text-left">
              <div className="mb-6 flex items-start gap-3">
                <div className="flex justify-center p-2 gap-2 rounded-full items-center border border-fuchsia-200 bg-fuchsia-100 dark:bg-gray-900">
                  <div className="bg-fuchsia-600 animate-pulse p-1 rounded-full"></div>
                  <p className="dark:text-white text-xs">Developpeur</p>
                </div>
              </div>
              <TextType 
                text={[
                  "Bonjour, je suis Mr_Dims",
                  "Développeur Full Stack",
                  "Créateur de solutions web"
                ]}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-200"
                typingSpeed={50}
                pauseDuration={2000}
                loop={true}
              />
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 mt-4">
                  Je suis un <span className="text-yellow-600 dark:text-yellow-400 font-meduim">développeur</span> passionné spécialisé dans la création d'application web et mobile modernes réactifs. <br /> Explorez mon portfolio pour découvrir mes <span className="text-fuchsia-600 dark:text-fuchsia-300 font-meduim">projets</span>  et <span className="text-fuchsia-600 dark:text-fuchsia-300 font-meduim">compétences</span> .
                </p>
                <p className="font-medium text-gray-600 dark:text-gray-300 mb-4 mt-4">Je cree des <span className="text-fuchsia-600 dark:text-fuchsia-300 font-bold">Solution dynamiques</span> pour donner vie a vos <span className="text-fuchsia-600 dark:text-fuchsia-300 font-bold">projets</span></p>
              </div>

              <div className="flex gap-4">
                <a href="#projets" className="px-5 py-2 bg-gradient-to-br from-fuchsia-700 to-fuchsia-400 shadow-lg text-white font-bold rounded-2xl hover:bg-fuchsia-700 transition hover:scale-105 cursor-pointer duration-200">
                  Voir mes Projets
                </a>

                <a href="#contact" className="px-5 py-2 border-2 border-yellow-500 text-yellow-500 font-bold rounded-2xl dark:hover:bg-gray-700 transition hover:scale-105 cursor-pointer duration-200">
                  Contactez-moi
                </a>
              </div>
              <div className="mt-6 gap-2 md-gap-4 lg:gap-6 flex items-center "> 
                <div className="p-2 bg-gray-200 rounded-lg dark:bg-gray-700 cursor-pointer">
                  <a href="">
                    <CloudCheckIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition"/>
                  </a> 
                </div>

                <div className="p-2 bg-gray-200 rounded-lg dark:bg-gray-700 cursor-pointer">
                  <a href="">
                    <CloudCheckIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition"/>
                  </a> 
                </div>
                <div className="p-2 bg-gray-200 rounded-lg dark:bg-gray-700 cursor-pointer">
                  <a href="mailto:franckdimitrio009@gmail.com">
                    <CloudCheckIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition"/>
                  </a> 
                </div>
              </div>
            </div>
          </AnimationGauche>
          
          <AnimationGauche distance={50} direction="horizontal" delay={1}>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="relative z-10 border border-pink-500/10 rounded-full overflow-hidden p-2 shadow-2xl bg-white/10 backdrop-blur transition hover:scale-105 cursor-pointer duration-400">
                    <img src="src/assets/moi/IMG_7608.JPG" alt="Mon image" class="w-[270px] sm:w-[280px] md:w-[300px] lg:w-[350px] xl:w-[350px] object-contain rounded-full"/>
                  </div>
                  
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-500/20 backdrop-blur-lg rounded-full border border-white/20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-pink-500/30 backdrop-blur-sm rounded-full border border-white/20 animate-pulse"></div>
                  <div className="absolute -top-3 -right-3 w-5 h-5 bg-white/30 backdrop-blur-sm rounded-full border border-white/20 animate-pulse"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-white/30 backdrop-blur-sm rounded-full border border-white/20 animate-pulse"></div>
                </div>
            </div>
          </AnimationGauche>
        </div>

        <div class="flex justify-center absolute bottom-10 w-full  z-10">
          <a href="#projets" class="animate-bounce text-gray-600 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

        </div>

      </section>
      </>
    );
}