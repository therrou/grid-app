import React from 'react'

export const PaginationButtons = ({ cardsPerPage, dataJson, handlePagination }) => {

    const pages = [];
    for(let i = 1; i <= Math.ceil(dataJson.length / cardsPerPage); i++) {
        pages.push(i)
    }

     
    return (
        <div className='m-1 pagination-container'>
            {
                pages.map( page => {
                    return <button key={page+1} onClick={() => handlePagination(page)} className='page btn btn-primary m-1'> { page } </button>
                })
            }
        </div>
        
    )
}
