import React,{useState,useEffect} from 'react'

export default function FilmTypes (props) {

    const [filmTypes,setFilmTypes] = useState([])
    const [error,setError] = useState("")
    const [search,setSearch] = useState("")

    useEffect(() => {
        fetchFilmTypes()
    }, []);

    const fetchFilmTypes = ()=> {
        fetch(process.env.REACT_APP_API_URL+"/filmTypes",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
            },
        })
        .then((response)=>{
            console.log(response)
            return response.json()
        })
        .then((json)=>{
            console.log(json)
            if(json.err){
                setError(json.err)
            }else{
                console.log(json)
                setFilmTypes(json)
            }
            
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <>  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">

            <div className="my-3">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Film types
                </h3>
                <div className="flex flex-row items-center justify-center mb-3 w-full lg:w-1/3 mt-4">
                    <input onChange={(e)=>setSearch(e.target.value)} className=" w-full  bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" type="text" placeholder="Rechercher"/>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {filmTypes.map((filmType)=>{
                    if(filmType.name.toLowerCase().search(search.toLowerCase()) === -1 ){
                        return null
                    }
                    return(
                        
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt className="text-sm text-center leading-5 font-medium text-gray-500 truncate">
                                            {filmType.name}
                                        </dt>
                                        
                                    </dl>
                                </div>
                            </div>
                        
                    )
                })}
                </div>
            </div>
        </div>
            
        </>
    )
}