import { useEffect } from "react";
import { CalendarMinus, ExternalLink, Code, SplinePointer } from "lucide-react"
import AnimationGauche from "../components/AnimationGauche";
import TextType from "../components/TextType";


import { useState } from "react";
import axios from "axios";

function Competences() {
    return (
      <>
        <section className="relative bg-gray-50 dark:bg-gray-900 py-20  pt-20 lg:pt-20 items-center overflow-hidden ">
          <div className="max-w-5xl mx-auto mb-10">
                <div className="mb-4 flex items-center justify-center mt-3 md:mt-0">
                  <div className="flex justify-center p-2 gap-2 rounded-full items-center border border-fuchsia-200 bg-fuchsia-100 dark:bg-gray-900">
                    <div className="bg-fuchsia-600 animate-pulse p-1 rounded-full"></div>
                    <p className="dark:text-white text-xs">Projets Concrets</p>
                  </div>
                </div>
            <p className="justify-center items-center flex text-2xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-200  font-bold">Projets Concrets</p>
            <p className="justify-center items-center flex text-xs md:text-lg lg:text-lg text-gray-700 dark:text-gray-200 ">Decouvrez les projets sur lesquels j'ai travaille</p>
            
          </div>
          <div className="flex justify-center items-center w-full mb-10 p-5 md:p-0 lg:m-0">    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="" className="relative group hover:scale-105 transition-transform duration-400 ">
                    <div className="relative bg-white dark:bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-0 overflow-hidden hover:shadow-md transition-shadow hover:border hover:border-fuchsia-600">
                        <div className="group relative h-48 bg-gradient-to-br from-purple-500 to-blue-500 ">
                            <div className="absolute  h-48 w-full  bg-gradient-to-br  to-black/60 object-cover p-10 group-hover:to-black/20"></div>
                            <img src="/assets/img_test/img_tensio.png" alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bg-green-100 px-2 py-1 rounded-full top-4 right-4 flex justify-center p-2 gap-2 items-center">
                                <div className="bg-green-600 animate-pulse p-1 rounded-full"></div>
                                <span className=" text-green-700 text-xs ">Public</span>
                            </div>
                            <div className=" flex justify-between items-center absolute bottom-4 left-4">
                                <span className="text-white font-semibold flex justify-center gap-2 items-center">Developpement Web <SplinePointer /></span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-fuchsia-600  to-yellow-400 bg-clip-text text-transparent mb-2">Mercy Tensio</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Site vitrine de Mercy Tensio une App de suivie de <br /> tension arteriel</p>
                            
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 dark:bg-purple-100/10 bg-blue-100/10 rounded-full flex items-center justify-center">
                                        <i className="fas fa-calendar text-purple-600 text-xs"></i>
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">20-02-2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 dark:bg-blue-100/10 bg-blue-100/10 rounded-full flex items-center justify-center">
                                        <i className="fas fa-eye text-blue-600 text-xs"></i>
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">1.2k</span>
                                </div>
                            </div>
                                <div className="mt-3 font-meduim  text-gray-700  rounded text-xs">
                                    <p className="flex items-center justify-start gap-1 text-yellow-500/50"> <Code size={16}/> Satcks techniques </p>
                                </div>
                            <div className="flex items-center justify-between mt-3">
                               
                                <div className="flex gap-2">
                                    <span className="dark:bg-gray-100/20 dark:text-white bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                                    <span className="dark:bg-gray-100/20 dark:text-white bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                                </div>
                                <div className="flex gap-2">

                                    <a href=""className="p-3 rounded-lg dark:bg-gray-100/10 bg-gray-100/10 hover:bg-gray-200 flex items-center justify-center transition-colors">
                                        
                                    </a>
                                    <a href=""className="p-3 rounded-lg bg-gray-100/ dark:bg-gray-100/10  hover:bg-gray-200 flex items-center justify-center transition-colors">
                                        
                                    </a>
                                    <a href=""className="p-3 rounded-lg bg-gray-100 dark:bg-gray-100/10  hover:bg-gray-200 flex items-center justify-center transition-colors">
                                        
                                    </a>
                                </div>
                            </div>

                            <hr className="mt-5 dark:opacity-25"/>

                            <div className="mt-5 flex justify-between items-center">
                                <p className="text-xs text-gray-500">Mis à jour il y a 3 jours</p>
                                <a href="" >
                                    <div className="px-4 py-2 rounded-lg animate-pulse bg-fuchsia-600 flex gap-2 items-center justify-center text-sm text-white">
                                        <p className="hidden md:block">voir les</p>
                                        <p className="flex gap-2 items-center justify-center">details <ExternalLink size={16}/></p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </a>
              </div>
          </div>
        </section>
      </>
    );
}

export default Competences;
