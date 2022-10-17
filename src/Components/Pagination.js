import React from 'react'
import { useGlobleContext } from './ContextApi'

const Pagination = () => {
    const {previewPage,nextPage,DataperPage,state,paginatePerPage} = useGlobleContext();
    const pageNumber = [];
    let totalPage = state.length;
    for(let i=1; i<= Math.ceil(totalPage / DataperPage); i++){
      pageNumber.push(i);
    }
    console.log(pageNumber);
  return (
   <>
    
    <div className="btn" id='pagination'>
        <button onClick={previewPage} >Prev</button>
        <nav>
          <ul className='pagination'>
          {
            pageNumber.map(number => {
            return  <li className='page-item' key={number}>
                <a onClick={()=>paginatePerPage(number)} href="#" className='page-link'>
                 {number}
                </a>
              </li>
            })
          }
          </ul>
        </nav>
        <button onClick={nextPage} >Next</button>
    </div>
   </>
  )
}

export default Pagination