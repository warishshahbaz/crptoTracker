import React from 'react'
import { useGlobleContext } from './ContextApi'

const Search = () => {
    const {HandleChange} = useGlobleContext();
  return (
    <>
        <div className="search">
        <h3>Crypto Tracker</h3>
        <br />
            <form action="#">
                <input type="text" placeholder='Search' onChange={HandleChange} />
            </form>
        </div>
    </>
  )
}

export default Search