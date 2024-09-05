import React from 'react'
import { reqCharacters } from "../services/characters"


export const GridCharacters = ({characters}) => {
  return (
    <>
        <div className="card">
            <div className="container d-fex flex-row justify-content-center alig-items-center mt-3 w-50" >
                <input className="form-control me-2" type="text" onChange={(e)=>{setName(e.target.value)}}></input>
                <br></br>
                <button className="btn btn-success" type="submit" onClick={reqCharacters}>Buscar Personaje</button>
            </div>
        <br></br>
        </div>
        <br></br>
        <div className="d-flex flex-row row row-cols-6">
            {
                characters &&
                    characters.map((char)=>(
                        <div key={char.id}>
                            <h3 className="text-center">{char.name}</h3>
                            <img style={{width: "13rem"}} src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt=""/>
                        </div>
                    ))
            }
        </div>
    </>
  )
}
