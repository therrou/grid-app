import React, {  useState } from 'react'

export const AddCard = ({setDataJson, dataJson}) => {

    const [formState, setformState] = useState({title: '', description: '', imagePath: ''})

    const {imagePath, title, description} = formState

        const handleInputChange = ({target}) => {
                setformState({
                    ...formState,
                    [target.name] : target.value
                })
        }

        
    
        let disabled = true
        if(formState.title !== '' && formState.imagePath !== '') {
                disabled = false;
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            
            setDataJson([formState, ...dataJson])
            setformState({title:'', description: '', imagePath: ''})

        }
     
    return (
        <>
        <div className='btn-add-container'>
            <button className='btn btn-success m-3' 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal">
             + </button>
        </div>

        <form className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add a new card: </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div className="mb-1 p-3">
                        <label htmlFor="imagePath" className="form-label">URL Image</label>
                        <input 
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control" 
                            id="imagePath" 
                            name='imagePath' 
                            required
                            value={imagePath}
                            placeholder="https://..." />
                    </div>
                    <div className="mb-1 p-3">
                        <label htmlFor="cardTitle" className="form-label">Card Title</label>
                        <input 
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control" 
                            id="cardTitle"
                            value={title}
                            name='title' 
                            required
                            placeholder="Best Image Ever..." />
                    </div>
                    <div className="mb-1 p-3">
                        <label htmlFor="descriptionCard" className="form-label">Card Description</label>
                        <textarea 
                            onChange={handleInputChange}
                            className="form-control" 
                            id="descriptionCard" 
                            name='description' 
                            value={description}
                            rows="3" 
                            required
                            placeholder='Description....'></textarea>
                    </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={handleSubmit} type="button" disabled={disabled} className="btn btn-primary" data-bs-dismiss="modal">Add new card</button>
                </div>
                </div>
            </div>
        </form>
        </>
    )
}
