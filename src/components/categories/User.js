import React,{useState,useEffect} from 'react'

export default function User (props) {

    const [user,setUser] = useState(null)
    const [error,setError] = useState("")
    const [search,setSearch] = useState("")
    const idUser = props.match.params.id
    console.log(`idUser : ${idUser}`)
    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = () => {
        fetch(`${process.env.REACT_APP_API_URL}/users/${idUser}`,{
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
                setUser(json)
            }
            
        }).catch((error)=>{
            console.log(error)
        })
    }

    if(user !== null){
        return(
            <>              
            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {user.first_name} {user.last_name}
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">{user.email}</p>
                </div>
                <div class="border-t border-gray-200">
                    <dl>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Age</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.age}</dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Address</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.address}</dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Tel number</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.tel_number}</dd>
                        </div>

                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Animals</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.animals.map((animal) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {animal.name}
                                                </span>
                                            </div>
                                        </li>
                                    )  
                                })}
                                </ul>
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Animes</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.animes.map((anime) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {anime.name}
                                                </span>
                                            </div>
                                        </li>
                                    )  
                                })}
                                </ul>
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Cars</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.cars.map((car) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {car.name} - <small class="text-sm">{car.brand}</small>
                                                </span>
                                            </div>
                                        </li>
                                    )  
                                })}
                                </ul>
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Destinations</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.destinations.map((destination) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {destination.name}
                                                </span>
                                            </div>
                                        </li>
                                    )  
                                })}
                                </ul>
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Drinks</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.drinks.map((drink) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {drink.name}
                                                </span>
                                            </div>
                                        </li>
                                    )  
                                })}
                                </ul>
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Film Types</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.filmtypes.map((filmtype) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {filmtype.name}
                                                </span>
                                            </div>
                                        </li>
                                    )  
                                })}
                                </ul>
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Foods</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.foods.map((food) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {food.name}
                                                </span>
                                            </div>
                                        </li>
                                    )  
                                })}
                                </ul>
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Music types</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.musictypes.map((musictype) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {musictype.name}
                                                </span>
                                            </div>
                                        </li>
                                    )  
                                })}
                                </ul>
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Sports</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.sports.map((sport) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {sport.name}
                                                </span>
                                            </div>
                                        </li>
                                    )  
                                })}
                                </ul>
                            </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Videogames</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-row">
                                <ul class="border bg-gray-500 text-white border-gray-200 rounded-md divide-y divide-gray-200 flex w-full">
                                { user.videogames.map((videogame) => {
                                    return(
                                        <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm flex-col w-full">
                                            <div class="flex items-center">
                                                <span class="ml-2 truncate">
                                                    {videogame.name}
                                                </span>
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
            </>
        )
    }
    else{
        return (
        <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-300 opacity-25"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                    <div className="inline-block px-4 pt-5 pb-4 text-center ">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-400 h-32 w-32"></div>
                    </div>
                </div>
            </div>
        </>
        )
    }
    
}