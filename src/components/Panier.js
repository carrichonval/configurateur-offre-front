import React, {useState,useEffect} from 'react';
import lodash from 'lodash'


const Panier = ({panier}) => {
    console.log(panier)

    const [validePanier,setValidePanier] = useState(false)

    const calculTotal = (article) => {
        let total = 0
        total += parseInt(article.price)
        lodash.forEach(article.options,(option)=>{
            if(option.selected){
                total += parseInt(option.price)
            }
        })
        return total
    }


    const validerPanier = async (panier) => {
        console.log(panier)
        let shopID = await fetchShoppingId();
        shopID = shopID.id
        console.log("ID",shopID)

        for await (const article of panier) {
            let total = 0
            for(const option of article.options){
               if(option.selected){
                   total++
               }
            }
            if(total == 0){
                let tps = await fetchAddArticle(shopID,article.id,0)
            }else{
                for(const option of article.options){
                    if(option.selected){
                        let res = await fetchAddArticle(shopID,article.id,option.id)
                    }
                 }
            }
        }
        setValidePanier(true)
    }

    const fetchShoppingId = () =>{
        const response = fetch(process.env.REACT_APP_API_URL+'/shoppingcards', {
            method: 'POST',
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
            return json
        })
        .catch((error) => {
            console.log(error)
        });

        return response
    }

    const fetchAddArticle = (shopID,articleID,optionID) =>{
        const response = fetch(process.env.REACT_APP_API_URL+'/orders', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'shoppingcardId':shopID,
                'productId':articleID,
                'optionId':optionID,
            })
        })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((json) => {
            return json
        })
        .catch((error) => {
            console.log(error)
        });

        return response
    }


        return (
            <>
                <div  className="cursor-pointer mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button onClick={()=>validerPanier(panier.panier)} type="button" className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                       Valider le panier
                    </button>
                </div>
                <div  className="cursor-pointer mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button onClick={()=>panier.viderPanier()} type="button" className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        Vider le panier
                    </button>
                </div>
                {validePanier ? 
                
                    <div className="bg-green-200 border-l-4 w-1/2 border-green-500 p-4 mb-2 mx-4 mt-4 rounded-md">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm leading-5 text-green-800">
                                {"La commande à bien été passé"}
                            </p>
                        </div>
                    </div>
                </div>
                :null}
                <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Panier</h2>
                    <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">


                    {panier.panier.map((p)=>{
                        console.log("ELEM",p)
                    return(
                        <li class="col-span-1 flex shadow-sm rounded-md">
                            <div class="flex-shrink-0 flex items-center justify-center w-16 bg-green-400 text-white text-sm leading-5 font-medium rounded-l-md">
                                {p.shopID}
                            </div>
                            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                <div class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">{p.name}</div>
                                <div class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Total avec options : {calculTotal(p)} € </div>
                                
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

export default Panier