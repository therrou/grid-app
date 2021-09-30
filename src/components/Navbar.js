import React from 'react'

export const Navbar = ({setSearch}) => {

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a href='/' className="navbar-brand">Grid App</a>
                <form className="d-flex">
                <input onChange={handleInputChange} name='search' className="form-control me-2" type="search" placeholder="Search by title..." aria-label="Search" />
                </form>
            </div>
        </nav>
    )
}
