import React, {useState} from 'react';
import Note from './Note';
import Searchbar from './Searchbar';
import add_button from './icons/svg/iPhone 11 Pro/add_button.svg';

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

    const onChangeHandle= ()=>{
        console.log("checker")
    }

    return (
        <div>            
            <p>Notes by {}</p>
            <div className="Linestrips"></div>
            <div>
            <Searchbar search={search} setSearch={setSearch} />
            <Note notes={filteredNotes} />
            <div>
                <span>
                    <img type="button" onClick={onChangeHandle} src={add_button} alt="icon"/>
                </span> 
            </div>
            </div>
        </div>
    );
}

export default SearchApp;
