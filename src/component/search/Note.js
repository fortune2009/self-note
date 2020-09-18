import React from 'react';
// import Searchbar from './Searchbar';
import './style.css'

const Note = ({notes}) => {
    
    return (
        <div className="Note">
            
            {
                notes.map((note,index)=>{
                   
                    return(
                        <div className="Note-flex">
                         <h1 className="Note-flex-item-title">{note.title}</h1>
                         <p className="Note-flex-item-desc">{note.description}</p>   
                         <span className="Note-flex-timeStamp">Created</span><span className="Note-flex-time"> {note.time} </span>                         
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Note;
