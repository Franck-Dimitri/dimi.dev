// components/AnimatedTitle.jsx
'use client';

import TextType from './TextType';

export default function AnimatedTitle() {
  return (
    <div className="text-2xl md:text-4xl lg:text-5xl font-bold">
      <TextType 
        text={["Bonjour, je suis"]}
        className="text-gray-700 dark:text-gray-200"
        typingSpeed={50}
        loop={false}
        onSentenceComplete={() => {}}
      />
      {" "}
      <TextType 
        text={["Mr_Dims"]}
        className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 dark:from-fuchsia-300 dark:to-fuchsia-500 bg-clip-text text-transparent"
        typingSpeed={30}
        initialDelay={1800}
        loop={false}
      />
      <br />
      <TextType 
        text={["Développeur Full Stack", "Créateur de solutions web"]}
        className="text-gray-700 dark:text-gray-200"
        typingSpeed={50}
        initialDelay={3500}
        pauseDuration={2000}
        loop={true}
      />
    </div>
  );
}