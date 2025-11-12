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
        <div className="min-h-screen gap-3 md:gap-5 lg:gap-8 flex flex-col-reverse md:flex-row items-center justify-center bg-gray-50 dark:bg-gray-800 px-4">

          <AnimationGauche distance={50} direction="horizontal" delay={1}>
            <div className="p-3">
              <div className="mb-6">
                <div className="flex justify-center p-2 gap-2 rounded-full items-center border border-fuchsia-200 bg-fuchsia-100 dark:bg-gray-900">
                  <div className="bg-fuchsia-600 animate-pulse p-1 rounded-full"></div>
                  <p className="dark:text-white text-xs">Developpeur</p>
                </div>
              </div>
              <TextType>
                <span className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200">Bonjour, je suis </span>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 dark:from-fuchsia-300 dark:to-fuchsia-500 bg-clip-text text-transparent ml-2">Mr_Dims</span>
              </TextType>
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Je suis un développeur passionné spécialisé dans la création de sites web modernes et réactifs. Explorez mon portfolio pour découvrir mes projets et compétences.
                </p>
              </div>
            </div>
          </AnimationGauche>
          
          <AnimationGauche distance={50} direction="horizontal" delay={1}>
            <div className="">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
                Bienvenue sur mon Portfolio
              </h1>
            </div>
          </AnimationGauche>
        </div>
      </>
    );
}