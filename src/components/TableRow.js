import React from 'react'
import './TableRow.css'

const TableRow = (props) => {
  return (
    <li className="table-row" >
        <div className="col" >{props.sl}</div>
        <div className="col" >{props.cat}</div>
        <div className="col" ><i className="fa-solid fa-pen-to-square">
                              </i> <i className="fa-solid fa-trash"></i>
                              <i className="fa-solid fa-eye"></i>
                              </div>
    </li>

  )
}
export default TableRow;
