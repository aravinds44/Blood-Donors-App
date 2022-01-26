import React from 'react'
import './SearchBox.css'
function SearchBox(props) {
    function handleChange(event){
        props.onChange(event.target.value)        
    }
    return (
        <div  className='searchbox-container'>
        <div className='search-box'>
            <button className='search-btn' ><i className="fas fa-search"></i></button>
            <input type="text" placeholder='Search for name'  className='search-input'  onChange={handleChange}  />
        </div>
        </div>
    )
}

export default SearchBox
