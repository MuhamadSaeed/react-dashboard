import React, { useState } from 'react'
import "./usersTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"


function UsersTable({rows, columns, title, btnName}) {

    let [data, setData] = useState(rows)

    let handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    let actionCulmns = [
        {
            field: "action",
            headerName: "action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/userid">
                            <div className="viewBtn">view</div>
                        </Link>
                        <div className="deleteBtn" onClick={()=> handleDelete(params.row.id)}>delete</div>
                    </div>
                )
            }}
    ]

    return (
        <div  className="usertable">
            <div className="some">
                <h2>{title}</h2>
            <Link to="new"><button>{btnName}</button></Link>
            </div>
            <DataGrid
                rows={data}
                columns={columns.concat(actionCulmns)}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    )
}

export default UsersTable