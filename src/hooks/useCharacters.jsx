import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"

export const useCharacters = (page, search) => {
    const [characters, setCharacters] = useState([])
    const [pag, setPag] = useState(1)

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await reqCharacters(page, 20, search)
                setCharacters(data.results || [])
                setPag(Math.ceil(data.total / 20))
            } catch (error) {
                console.error('Error:', error)
                setCharacters([])
                setPag(1)
            }
        }
        fetchCharacters()
    }, [page, search])

    return {
        characters,
        pag
    }
}
