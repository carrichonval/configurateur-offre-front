import React,{useState,useEffect} from 'react'

export default function Sports (props) {

    const [sports,setSports] = useState([])
    const [error,setError] = useState("")
    const [search,setSearch] = useState("")
    const [isTeamPlay,setIsTeamPlay] = useState(false)

    useEffect(() => {
        fetchSports()
    }, []);

    const fetchSports = ()=> {
        fetch(process.env.REACT_APP_API_URL+"/sports",{
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
                setSports(json)
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
                    Sports
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center mb-3 w-full lg:w-1/3 mt-4">
                    <input onChange={(e)=>setSearch(e.target.value)} className=" w-full  bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" type="text" placeholder="Rechercher"/>
                    <div class="mt-4 md:mt-0 md:ml-4 flex items-center w-1/3">
                        <input id="isAlcoholised" onChange={()=>setIsTeamPlay(!isTeamPlay)} value={isTeamPlay} type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
                        <label for="isAlcoholised" class="ml-2 block text-sm leading-5 text-gray-900">
                            Is team play
                        </label>
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {sports.map((sport)=>{
                    if(sport.name.toLowerCase().search(search.toLowerCase()) === -1 ){
                        return null
                    }

                    if(isTeamPlay && sport.isTeamPlay == false){
                        return null
                    }

                    return(
                        
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt className="text-sm text-center leading-5 font-medium text-gray-500 truncate">
                                            {sport.name}
                                        </dt>
                                        <dd className="mt-1 text-center text-sm leading-9 font-semibold text-gray-900">
                                            {sport.isTeamPlay ? "Team play" : "No team play"}
                                        </dd>
                                        
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