import React,{useState,useEffect} from 'react'
import Select from 'react-select';
import lodash from 'lodash'


export default function Cars (props) {

    const [cars,setCars] = useState([])
    const [error,setError] = useState("")
    const [search,setSearch] = useState("")
    const [brand,setBrand] = useState("")
    const [brands,setBrands] = useState(null)

    useEffect(() => {
        fetchCars()
    }, []);

    const fetchCars = ()=> {
        fetch(process.env.REACT_APP_API_URL+"/cars",{
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
                lodash.forEach(json,(brand)=>{
                    brand.value = brand.id
                    brand.label = brand.brand
                })
                
                setCars(json)
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
                    Cars
                </h3>
                <div className="flex flex-row items-center justify-center mb-3 w-full lg:w-1/2 mt-4">
                    <input onChange={(e)=>setSearch(e.target.value)} className=" w-full  bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" type="text" placeholder="Rechercher"/>
                    <Select
                        options={cars}
                        onChange = {(e)=>setBrand(e.brand)}
                        placeholder="Choisir une marque"
                        className="w-1/2 ml-4"
                    />   
                </div>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {cars.map((car)=>{
                    if(car.name.toLowerCase().search(search.toLowerCase()) === -1 ){
                        return null
                    }
                    if(car.brand.toLowerCase().search(brand.toLowerCase()) === -1 ){
                        return null
                    }
                    return(
                        
                            <div className="bg-white overflow-hidden shadow rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt className="text-sm text-center leading-5 font-medium text-gray-500 truncate">
                                            {car.name}
                                        </dt>
                                        <dd className="mt-1 text-center text-sm leading-9 font-semibold text-gray-900">
                                            {car.brand}
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