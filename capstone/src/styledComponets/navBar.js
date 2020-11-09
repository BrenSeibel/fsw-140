import React from 'react'
import { Link } from 'react-router-dom'


function navBar() {
    return (
        <div className='navBar'>
            <span className='link'><Link to="/">Home</Link></span>
            <span className='link'><Link to="/movies">Movie Collection</Link></span>
            <span className='link'><Link to="/tvshows">TV Collection</Link></span>
        </div>
    )
}



export default navBar