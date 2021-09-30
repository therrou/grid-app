import React from 'react'

export const SingleCard = ({imagePath, title, description}) => {
    return (
        <div className="card m-2">
        <img loading='lazy' src={imagePath} className="card-img-top" alt={description} />
        <div className="card-body">
          <h5 className="card-title">{ title}</h5>
          <p className="card-text">{description}</p>
        
        </div>
      </div>
    )
}
