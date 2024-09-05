import { useEffect, useState } from "react"
import { reqCharacters } from "../services/characters"

export const useCharacters = (page) => {

    const [characters, setCharacters] = useState()  
  

    useEffect(()=>{
        reqCharacters(((page-1)*20)).then((data)=>{
            setCharacters(data.results)
        })

    }, [page])

    return {
        characters,
    }
}
