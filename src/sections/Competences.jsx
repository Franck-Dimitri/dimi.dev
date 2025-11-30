import { useEffect } from "react";
import { CalendarMinus } from "lucide-react"
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
                    <p className="dark:text-white text-xs">Projets</p>
                  </div>
                </div>
            <p className="justify-center items-center flex text-2xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-200  font-bold">Projets Concrets</p>
            <p className="justify-center items-center flex text-xs md:text-lg lg:text-lg text-gray-700 dark:text-gray-200 ">Decouvrez les projets sur lesquels j'ai travaille</p>
            
          </div>
          <div className="flex justify-center items-center w-full mb-10">    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 relative">
                        <img src="/assets/moi/IMG_7608.JPG" alt="" class="w-full h-full object-cover opacity-80" />
                        <div className="absolute top-4 right-4">
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">en cours</span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <span className="text-white font-semibold">Design Graphique</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Photo de Profile Pro</h3>
                        <p className="text-gray-600 text-sm mb-4">Photo de profil professionnels fait par FD pour li meme</p>
                        
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-calendar text-purple-600 text-xs"></i>
                                </div>
                                <span className="text-sm text-gray-500">20-02-2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-eye text-blue-600 text-xs"></i>
                                </div>
                                <span className="text-sm text-gray-500">1.2k</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                            </div>
                            <div className="flex gap-2">

                                <a href=""className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                                    <i data-lucide="eye" class="text-gray-600 w-4 h-5"></i>
                                </a>

                                <form action="" method="POST" class="inline">
                               
                                    <button type="submit" onclick="return confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')" 
                                            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg flex items-center gap-2 transition-colors">
                                        <i data-lucide="trash-2" className="w-4 h-4"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 relative">
                        <img src="/assets/moi/IMG_7608.JPG" alt="" class="w-full h-full object-cover opacity-80" />
                        <div className="absolute top-4 right-4">
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">en cours</span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <span className="text-white font-semibold">Design Graphique</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Photo de Profile Pro</h3>
                        <p className="text-gray-600 text-sm mb-4">Photo de profil professionnels fait par FD pour li meme</p>
                        
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-calendar text-purple-600 text-xs"></i>
                                </div>
                                <span className="text-sm text-gray-500">20-02-2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-eye text-blue-600 text-xs"></i>
                                </div>
                                <span className="text-sm text-gray-500">1.2k</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                            </div>
                            <div className="flex gap-2">

                                <a href=""className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                                    <i data-lucide="eye" class="text-gray-600 w-4 h-5"></i>
                                </a>

                                <form action="" method="POST" class="inline">
                               
                                    <button type="submit" onclick="return confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')" 
                                            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg flex items-center gap-2 transition-colors">
                                        <i data-lucide="trash-2" className="w-4 h-4"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 relative">
                        <img src="/assets/moi/IMG_7608.JPG" alt="" class="w-full h-full object-cover opacity-80" />
                        <div className="absolute top-4 right-4">
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">en cours</span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <span className="text-white font-semibold">Design Graphique</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Photo de Profile Pro</h3>
                        <p className="text-gray-600 text-sm mb-4">Photo de profil professionnels fait par FD pour li meme</p>
                        
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-calendar text-purple-600 text-xs"></i>
                                </div>
                                <span className="text-sm text-gray-500">20-02-2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-eye text-blue-600 text-xs"></i>
                                </div>
                                <span className="text-sm text-gray-500">1.2k</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                            </div>
                            <div className="flex gap-2">

                                <a href=""className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                                    <i data-lucide="eye" class="text-gray-600 w-4 h-5"></i>
                                </a>

                                <form action="" method="POST" class="inline">
                               
                                    <button type="submit" onclick="return confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')" 
                                            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg flex items-center gap-2 transition-colors">
                                        <i data-lucide="trash-2" className="w-4 h-4"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </section>
      </>
    );
}

export default Competences;
