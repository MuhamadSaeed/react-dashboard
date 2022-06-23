import React from 'react'
import Nav from '../../components/nav/Nav'
import Slid from '../../components/slid/Slid'
import UsersTable from '../../components/usersTable/UsersTable'
import "./producuts.scss"
import {rows, columns} from "./data"

function Products({dark, setDark, toggle, setToggle}) {
  return (
    <div className='products'>
                <Slid toggle={toggle} setToggle={setToggle}/>
        <div className="containerProducts">
            <Nav toggle={toggle} setToggle={setToggle} dark={dark} setDark={setDark}/>
            <div>
                <UsersTable title="Products" btnName="Add A Product" rows={rows} columns={columns}/>
            </div>
        </div>
    </div>
  )
}

export default Products