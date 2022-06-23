import React from 'react'
import Nav from '../../components/nav/Nav'
import Slid from '../../components/slid/Slid'
import UsersTable from '../../components/usersTable/UsersTable'
import "./users.scss"
import {rows, columns} from "./data"
function Users({dark, setDark, toggle, setToggle}) {
  return (
    <div className='userspage'>
        <Slid toggle={toggle} setToggle={setToggle}/>
        <div className="containerUsers">
            <Nav toggle={toggle} setToggle={setToggle} dark={dark} setDark={setDark}/>
            <UsersTable title="Users" btnName="Add A User" rows={rows} columns={columns}/>
        </div>
    </div>
  )
}

export default Users