import { useCharacters } from "../hooks/useCharacters"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { GridCharacters } from "./GridCharacters";
import { useState } from "react";

export const MarvelApp = () => {

    const [page, setPage] = useState()
    const {characters} = useCharacters(page)

  return (
    <>  
        <GridCharacters characters={characters}/>
        <Pagination count={30} onChange={(e,value)=> setPage(value)} />
    </>
)
}
