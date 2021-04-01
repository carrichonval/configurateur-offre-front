import React,{useState,useEffect} from 'react'

export const withPanier = (WrappedComponent) =>{


    return () => {
        console.log("Gestion du panier")

        const [panier,setPanier] = useState([])
        const [lastID,setLastID] = useState(0)

        const ajouterArticle = (obj) =>{
            setPanier([...panier,{id:lastID}])
            setLastID(lastID + 1)
        }

        const viderPanier = () =>{
            setPanier([])
            setLastID(0)
        }

        const supprimerArticle = (id) =>{
            
        }

        return (
            <WrappedComponent panier={panier} ajouterArticle={ajouterArticle} viderPanier={viderPanier} />
        )
        
    }
}