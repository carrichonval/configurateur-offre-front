import React, { useState } from 'react';
import { withRouter,Link, useLocation } from "react-router-dom";
import { isAuthenticated,deconnexion, isAdmin } from './functions/auth'
import { withPanier } from './PanierContext';


const Header = (props)=>{
    

    const location = useLocation()
    console.log("Header",props)

    //Header qui s'affiche seulement quand on est connecté    
        return (
            <>
            <nav id="navbar" className="bg-white border-b border-gray-200 z-50 mb-4 sticky top-0 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="sm:-my-px sm:ml-6 flex">
                                <Link  to="/" className={(location.pathname === "/" ? "border-primary " : "border-transparent ") + " mr-4 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-500 focus:outline-none hover:border-fourth transition duration-150 ease-in-out"}>
                                    Accueil
                                </Link>
                                <Link  to="/panier" className={"border-transparent  mr-4 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-500 focus:outline-none hover:border-fourth transition duration-150 ease-in-out"}>
                                    Panier ({props.panier.length})
                                </Link>


                        </div>

                        
                        </div>
                    </div>
                </div>
            </nav>
            </>
        )
}

export default withPanier(Header)
