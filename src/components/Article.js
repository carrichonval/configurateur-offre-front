import React, {useState,useEffect} from 'react';


const Article = ({panier}) => {

        return (
            <>
                <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Pannier</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">


                    {panier.map((p)=>{
                        console.log(panier)
                    return(
                        <li class="col-span-1 flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-green-400 text-white text-sm leading-5 font-medium rounded-l-md">
                                {p.shopID}
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                <a href="#" class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">{panier.name}</a>
                                
                                </div>
                                <div class="flex-shrink-0 pr-2">
                                <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                                   
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                                </div>
                            </div>
                            </li>
                    )
                })}

                    </ul>
                </div>


               
            </>
        )
    
    
}

export default Article