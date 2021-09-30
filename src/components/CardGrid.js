import React, { useEffect, useState } from 'react'
import { AddCard } from './AddCard';
import { Navbar } from './Navbar';
import { PaginationButtons } from './PaginationButtons';
import { SingleCard } from './SingleCard'

export const CardGrid = ({data}) => {
    
    
    const [dataJson, setDataJson] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(6)
    const [search, setSearch] = useState('')

    useEffect( ()=> {
        setDataJson(data)
    }, [data]);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = dataJson.slice(indexOfFirstCard, indexOfLastCard)
    

    const handlePagination = (currentPage) => {
        setCurrentPage(currentPage)
    }

    const dataFiltered = dataJson.filter((card) => {
        if (card.title.toLowerCase().includes(search.toLowerCase())) { 
        return card
    } 
    return ''
    })

   
    return (
        <>
        <Navbar setSearch={setSearch} />
        <AddCard
             dataJson={dataJson}
             setDataJson={setDataJson}
             />
             {
                  search === '' 
                  ?  
                  <PaginationButtons  
                  dataJson={dataJson} 
                  cardsPerPage={cardsPerPage}
                  handlePagination={handlePagination}
                   />
                  : ''
             }
        <div className="grid-card-group">
            {    
                search === '' 
                ?
                currentCards.map( ({title, description, imagePath}) => 
                <SingleCard 
                   key={title}  
                   title={title}
                   description={description} 
                   imagePath={imagePath} />)
                :
                
                (
                    dataFiltered.length < 1
                    ?
                    <div className='alert alert-warning m-3'> <b> No results :( Try again! </b> </div>
                    : 
                    dataFiltered.map( ({title, description, imagePath}) => 
                     <SingleCard 
                        key={title}  
                        title={title}
                        description={description} 
                        imagePath={imagePath} />)
                    

                )
                
            }
        </div>
        </>
    )
}
