import React,{useState,useEffect} from 'react'
import lodash from 'lodash'
import { getUserAuth } from './functions/auth'

export default function Animals (props) {

    const [compatibility,setCompatibility] = useState(null)
    const [error,setError] = useState("")
    const [user,setUser] = useState(null)

    useEffect(() => {
        fetchUser()
        fetchCompatibility()
    }, []);

    const fetchCompatibility = ()=> {
        fetch(process.env.REACT_APP_API_URL+"/users/"+getUserAuth().id+"/compatibility",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
            },
        })
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            let orderBy = lodash.orderBy(json,['score'],['desc'])
            console.log(orderBy)
            if(json.err){
                setError(json.err)
            }else{
                setCompatibility(orderBy)
            }
            
        }).catch((error)=>{
            console.log(error)
        })
    }

    const fetchUser = ()=> {
        fetch(process.env.REACT_APP_API_URL+"/users/"+getUserAuth().id,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
            },
        })
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            console.log(json)
            if(json.err){
                setError(json.err)
            }else{
                setUser(json)
            }
        }).catch((error)=>{
            console.log(error)
        })
    }



    if(compatibility && user){
        return(
            <>  
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
                
                <div className="my-3">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Compatibility
                    </h3>
                    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-5">
                        <div className="bg-white overflow-hidden shadow rounded-lg sm:col-start-2 lg:col-start-3">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm text-center leading-5 font-medium text-black truncate">
                                        {user.first_name} {user.last_name}  
                                    </dt>
                                </dl>
                            </div>
                        </div>
                    </div>
    
    
                    <div className=" hidden sm:flex mt-12 flex-col sm:flex-row  justify-center">
                        <div className="bg-white overflow-hidden shadow rounded-lg col-start-2 w-full sm:w-1/5 sm:mt-8 bg-gray-500">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm text-center leading-5 font-medium text-black truncate">
                                        {compatibility[1].user.first_name} {compatibility[1].user.last_name}  
                                    </dt>
                                    <dd className="mt-1 text-center text-sm leading-9 font-semibold text-gray-900">
                                        Score : {compatibility[1].score}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg  w-full sm:w-1/5 bg-yellow-500">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm text-center leading-5 font-medium text-black truncate">
                                        {compatibility[0].user.first_name} {compatibility[0].user.last_name}  
                                    </dt>
                                    <dd className="mt-1 text-center text-sm leading-9 font-semibold text-gray-900">
                                        Score : {compatibility[0].score}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg  w-full sm:w-1/5 sm:mt-12 bg-red-900">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                <dt className="text-sm text-center leading-5 font-medium text-black truncate">
                                        {compatibility[2].user.first_name} {compatibility[2].user.last_name}  
                                    </dt>
                                    <dd className="mt-1 text-center text-sm leading-9 font-semibold text-gray-900">
                                        Score : {compatibility[2].score}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className=" sm:hidden mt-12 flex flex-col sm:flex-row  justify-center">
                        <div className="bg-white overflow-hidden shadow rounded-lg  w-full sm:w-1/5 bg-yellow-500">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm text-center leading-5 font-medium text-black truncate">
                                        {compatibility[0].user.first_name} {compatibility[0].user.last_name}  
                                    </dt>
                                    <dd className="mt-1 text-center text-sm leading-9 font-semibold text-gray-900">
                                        Score : {compatibility[0].score}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow rounded-lg col-start-2 w-full sm:w-1/5 sm:mt-8 bg-gray-500">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm text-center leading-5 font-medium text-black truncate">
                                        {compatibility[1].user.first_name} {compatibility[1].user.last_name}  
                                    </dt>
                                    <dd className="mt-1 text-center text-sm leading-9 font-semibold text-gray-900">
                                        Score : {compatibility[1].score}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        
                        <div className="bg-white overflow-hidden shadow rounded-lg  w-full sm:w-1/5 sm:mt-12 bg-red-900">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                <dt className="text-sm text-center leading-5 font-medium text-black truncate">
                                        {compatibility[2].user.first_name} {compatibility[2].user.last_name}  
                                    </dt>
                                    <dd className="mt-1 text-center text-sm leading-9 font-semibold text-gray-900">
                                        Score : {compatibility[2].score}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
    
                    <h3 className="mt-24 text-lg leading-6 font-medium text-gray-900">
                        Autres
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {compatibility.map((c,i)=>{
                            if(i== 0 || i == 1 || i== 2){
                                return null
                            }
                            return(
                                <div className="bg-white overflow-hidden shadow rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <dl>
                                            <dt className="text-sm text-center leading-5 font-medium text-gray-500 truncate">
                                                {c.user.first_name} {c.user.last_name}
                                            </dt>
                                            <dd className="mt-1 text-center text-sm leading-9 font-semibold text-gray-900">
                                                Score : {c.score}
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
    }else{
        return (
            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-300 opacity-25"></div>
                    </div>
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                    <div class="inline-block px-4 pt-5 pb-4 text-center ">
                        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-400 h-32 w-32"></div>
                    </div>
                </div>
            </div>
        )
    }
}