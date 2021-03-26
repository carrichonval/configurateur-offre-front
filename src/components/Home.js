import React, {useState,useEffect} from 'react';

import {withRouter} from "react-router-dom";


export default withRouter((props)=>{

    console.log(props.history)
    const [datas,setDatas] = useState(null)
    
    useEffect(() => {
        fetchDatas()
    }, []);

    const fetchDatas = ()=>{
        fetch(process.env.REACT_APP_API_URL+'/datas', {
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
            setDatas(json)
        })
        .catch((error) => {
            console.log(error)
        });
    }
    if(datas != null){
        return (
            <>
                <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="my-2">
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">A -</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            <li onClick={()=>props.history.push("/animals")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    A
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Animals</div>
                                        <p className="text-gray-500">{datas.animals} animals</p>
                                    </div>
                                    
                                </div>
                            </li>
                            <li  onClick={()=>props.history.push("/animes")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    A
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Animes</div>
                                        <p className="text-gray-500">{datas.animes} animes</p>
                                    </div>
                                    
                                </div>
                            </li>
                            <li  onClick={()=>props.history.push("/astrologicalSigns")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    A
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Astrological signs</div>
                                        <p className="text-gray-500">{datas.astrologicalSigns} astrological signs</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
    
                    <div className="my-2">
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">C -</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            <li onClick={()=>props.history.push("/cars")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-orange-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    C
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Cars</div>
                                        <p className="text-gray-500">{datas.cars} cars</p>
                                    </div>
                                </div>
                            </li>
                            <li  onClick={()=>props.history.push("/cities")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-orange-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    C
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Cities</div>
                                        <p className="text-gray-500">{datas.cities} cities</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
    
                    <div className="my-2">
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">D -</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            <li  onClick={()=>props.history.push("/destinations")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    D
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Destinations</div>
                                        <p className="text-gray-500">{datas.destinations} destinations</p>
                                    </div>
                                </div>
                            </li>
                            <li onClick={()=>props.history.push("/drinks")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    D
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Drinks</div>
                                        <p className="text-gray-500">{datas.drinks} drinks</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
    
                    <div className="my-2">
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">F -</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            <li onClick={()=>props.history.push("/foods")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-red-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    F
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Foods</div>
                                        <p className="text-gray-500">{datas.foods} foods</p>
                                    </div>
                                </div>
                            </li>
                            <li onClick={()=>props.history.push("/filmTypes")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-red-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    F
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Film types</div>
                                        <p className="text-gray-500">{datas.filmTypes} film types</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
    
                    <div className="my-2">
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">M -</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            <li onClick={()=>props.history.push("/musicTypes")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    M
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Music types</div>
                                        <p className="text-gray-500">{datas.musicTypes} music types</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
    
                    <div className="my-2">
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">R -</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            <li onClick={()=>props.history.push("/regions")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-blue-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    R
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Regions</div>
                                        <p className="text-gray-500">{datas.regions} regions</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
    
                    <div className="my-2">
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">S -</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            <li onClick={()=>props.history.push("/sports")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gray-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    S
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Sports</div>
                                        <p className="text-gray-500">{datas.sports} sports</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
    
                    <div className="my-2">
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">U -</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            <li onClick={()=>props.history.push("/users")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    U
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Users</div>
                                        <p className="text-gray-500">{datas.users} users</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
    
                    <div className="my-2">
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">V -</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            <li onClick={()=>props.history.push("/videoGames")} className="col-span-1 cursor-pointer flex shadow-sm rounded-md">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-indigo-600 text-white text-sm leading-5 font-medium rounded-l-md">
                                    V
                                </div>
                                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                    <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                        <div className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">Vidéos games</div>
                                        <p className="text-gray-500">{datas.videoGames} video games</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }else{
        return null
    }
    
})