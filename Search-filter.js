import React from "react";
import JSONDATA from './My_Data.json';
import { useState } from "react";
import './Search-filter.css'
const SearchFilter = () => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <>
        <div className='search'>
            <input type='text' placeholder='Search...' onChange={(event) => {
                setSearchInput(event.target.value)}}/>
             {JSONDATA.filter((val) => {
                if (searchInput == "") {
                    return val
                } else if (val.first_name.toLowerCase().includes(searchInput.toLowerCase())) {
                 return val
                }
            }).map((val, key) => {
                return (
    
                      <div  key={key}>
                      <tr className='item'>                  
                        <td>{val.first_name}</td>
                        <td>{val.state}</td>
                    </tr>
                </div> 
                )
                  
                  
                  })}
            </div>
        </>
    )
} 


export default SearchFilter;