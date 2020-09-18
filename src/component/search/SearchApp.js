import React, {useState, useEffect} from 'react';
import Note from './Note';
import Searchbar from './Searchbar';

const SearchApp = () => {
    const date = new Date();
    const day = date.getDay();
    let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    const month = date.getMonth();
    let monthlist = ["Jan","Feb","Mar","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const ourNotes =[
        {
            title:"My Daughter",
            description:`Lorem Ipsum is simply dummy 
                        text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since`,
            time: [daylist[day], ",  ", monthlist[month], " ", date.toLocaleTimeString()]
        },{
            title:"My son",
            description:`Lorem Ipsum is simply dummy 
                        text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since`,
            time: new Date().toLocaleTimeString()
        },
    ]

    const [search, setSearch] = useState("")

    const filteredNotes = ourNotes.filter((note,index)=>{
        return note.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>            
            <p>Notes by {}</p>
            <Searchbar search={search} setSearch={setSearch} />
            <Note notes={filteredNotes} />
            <button>Add Note</button>
        </div>
    );
}

export default SearchApp;
