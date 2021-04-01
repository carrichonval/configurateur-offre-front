import React, {useState,useEffect} from 'react';
import Article from './Article';

import Panier from './Panier';
import { withPanier } from './PanierContext';
import lodash from 'lodash'

const Home = (props) => {

    console.log(props)

    const [page,setpage] = useState('/')
    const [articles,setArticles] = useState([])
    const [selectedArticle,setSelectedArticle] = useState(null)

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
            lodash.forEach(json,(article)=>{
                lodash.forEach(article.options,(option)=>{
                    option.selected = false
                })
            })
            setArticles(json)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    const setOption = (id) =>{
        let test = JSON.parse(JSON.stringify(selectedArticle))
        lodash.forEach(test.options,(option)=>{
            if(option.id == id){
                option.selected = !option.selected
            }
        })
        setSelectedArticle(test)
    }

    const closeModal = ()=> {
        setSelectedArticle(null)
    }

    console.log(selectedArticle)

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

                {selectedArticle != null ? 
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div onClick={closeModal} className="absolute inset-0 bg-gray-500 opacity-50"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                            <div className="w-2/3 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6">
                                <div className="grid grid-cols-1 gap-4 mb-4">
                                    <div>
                                                                            
                                        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                                        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                            {selectedArticle.name}
                                            </h3>
                                            <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                                            {selectedArticle.description}
                                            </p>
                                        </div>
                                        <div class="px-4 py-5 sm:p-0">
                                            <dl>
                                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                                                <dt class="text-sm leading-5 font-medium text-gray-500">
                                                Prix
                                                </dt>
                                                <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                {selectedArticle.price} €
                                                </dd>
                                            </div>
                                            
                                            <div class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
                                                <dt class="text-sm leading-5 font-medium text-gray-500">
                                                Options
                                                </dt>
                                                <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                                <ul class="border border-gray-200 rounded-md">
                                                {selectedArticle.options.map((option,i)=>{
                                                    return (
                                                        <li key={option.id} class="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                                                            <div class="w-0 flex-1 flex items-center">
                                                                <span class="ml-2 flex-1 w-0 truncate">
                                                                    {option.name} - {option.price} €
                                                                </span>
                                                            </div>
                                                            <div class="ml-4 flex-shrink-0">
                                                                <input onChange={()=>setOption(option.id)} type="checkbox" />
                                                            </div>
                                                    </li>
                                                    )
                                                })}
                                                </ul>
                                                </dd>
                                            </div>
                                            </dl>
                                        </div>
                                        </div>

                                    </div>
                                    
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    
                                    <div className="flex flex-row "> 
                                        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                            <button onClick={()=>{props.ajouterArticle(selectedArticle);closeModal()}} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                                Ajouter au panier
                                            </button>
                                        </span>
                                        
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                        <button onClick={closeModal} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                            Fermer
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                :null}

                {page == '/' ?  
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
                : null}
                {page == '/panier' ? <Panier panier = {props} /> : null}
               
            </>
        )
    
    
}

export default withPanier(Home)