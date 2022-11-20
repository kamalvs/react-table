import React from 'react'
import TableRow from './TableRow'
import Data from './Data.json';
import './Table.css'

const Table = () => {
  return (
    <div className="user-table">
            <li className="table-header">
                <div className="col">SL NO</div>
                <div className="col">Catagory</div>
                <div className="col">Actions</div>
            </li>
            { 
                Data.map((user,id)=>{
                    console.log(user.name)                  
                   return <TableRow 
                       key={id}
                       sl={user.id}
                       cat={user.name}
                    /> 
                })}
                
            
        </div>

  )
}

export default Table