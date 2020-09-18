import React from 'react';
import './style.css';

const Searchbar = ({search,setSearch}) => {
    const onChangeHandler =(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div className="Searchbar">
            <input placeHolder="Search..." className="Searchbar-bar" onChange={onChangeHandler} />
        </div>
    );
}

export default Searchbar;
