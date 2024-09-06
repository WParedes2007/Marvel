import { useCharacters } from "../hooks/useCharacters"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { GridCharacters } from "./GridCharacters";
import { useState } from "react";
import { SearchCharacters } from "./SearchCharacters";

export const MarvelApp = () => {

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const {characters, pag} = useCharacters(page, search)

  const handlePageChange = (event, value) => {
      setPage(value)
  }

  const handleSearch = (term) => {
      setSearch(term)
      setPage(1)
  }


  return (
    <>  
        <div className='container d-flex flex-row justify-content-center align-items-center mt-3 w-50'>
                <SearchCharacters handleMarvel={handleSearch} />
        </div>

        <GridCharacters characters={characters}/>
        <Pagination className='d-flex justify-content-center mt-4'count={pag}page={page} onChange={handlePageChange}/>
    </>
  )

}
