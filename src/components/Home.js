import React, {useState,useEffect} from 'react';
import Article from './Article';

import Panier from './Panier';
import { withPanier } from './PanierContext';

const Home = (props) => {

    console.log(props)

    const [page,setpage] = useState('/')
    const [articles,setArticles] = useState([])
    const [selectedArticles,setSelectedArticle] = useState(null)

    useEffect(()=>{
        fetchArticles()
    },[])


    const fetchArticles = ()=>{

        fetch(process.env.REACT_APP_API_URL+'/products', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((json) => {
            console.log(json)
            setArticles(json)
        })
        .catch((error) => {
            console.log(error)
        });

    }

    console.log(selectedArticles)

        return (
            <>
                <nav id="navbar" className="bg-white border-b border-gray-200 z-50 mb-4 sticky top-0 ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="sm:-my-px sm:ml-6 flex">
                                    <div onClick={()=>setpage("/")}  className={(page === "/" ? "border-primary " : "border-transparent ") + " cursor-pointer mr-4 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-500 focus:outline-none hover:border-fourth transition duration-150 ease-in-out"}>
                                        Accueil
                                    </div>
                                    <div onClick={()=>setpage("/panier")} className={(page === "/panier" ? "border-primary " : "border-transparent ") + " cursor-pointer mr-4 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-500 focus:outline-none hover:border-fourth transition duration-150 ease-in-out"}>
                                        Panier ({props.panier.length})
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    Liste des articles
                </div>

                <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article)=>{
                            return(
                                                            
                                <li onClick={()=>setSelectedArticle(article)} class="col-span-1 bg-white rounded-lg hover:shadow-md cursor-pointer">
                                    <div class="w-full flex items-center justify-between p-6 space-x-6">
                                        <div class="flex-1 truncate">
                                            <div class="flex items-center space-x-3">
                                            <h3 class="text-gray-900 text-sm leading-5 font-medium truncate">{article.name}</h3>
                                            </div>
                                            <p class="mt-1 text-gray-500 text-sm leading-5 truncate">{article.description}</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-gray-200">
                                        <div class="-mt-px flex">
                                            <div class="w-0 flex-1 flex border-r border-gray-200">
                                                <div class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                                                <svg class="h-5 w-5 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                <span class="ml-3">{article.price}</span>
                                            </div>
                                            </div>
                                            <div class="-ml-px w-0 flex-1 flex">
                                            <div  class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
                                                <span class="ml-3">{article.options.length} option{article.options.length >1 && "s"} disponible</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>


                <div onClick={()=>props.ajouterArticle()} className="cursor-pointer mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    Ajouter un article au panier
                </div>
                

                {page == '/panier' ? <Panier panier = {props} /> : null}
               
            </>
        )
    
    
}

export default withPanier(Home)