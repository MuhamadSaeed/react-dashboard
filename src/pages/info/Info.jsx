import React from 'react'
import Nav from '../../components/nav/Nav'
import Slid from '../../components/slid/Slid'
import "./info.scss"
import Recharts from "../../components/recharts/Recharts"
import MainTable from "../../components/mainTable/MainTable"
import {data} from "./RechartsData"

function Info({dark, setDark, toggle, setToggle}) {
    return (
    <div className="userInfo">
        <Slid toggle={toggle} setToggle={setToggle}/>
        <div className="userinfoconatiner">
            <Nav toggle={toggle} setToggle={setToggle} dark={dark} setDark={setDark}/>
            <h2>Information</h2>
            <div className="main">
            <article className="info">
                <div className="edit">Edit</div>
                <div className="key">Name: </div>
                <div className="value">Mohamed</div>
                <div className="key">Email: </div>
                <div className="value">mohamed@gmail.com</div>
                <div className="key">Phone: </div>
                <div className="value">198 258 6664</div>
                <div className="key">Country: </div>
                <div className="value">Egypt</div>
                <div className="key">Address: </div>
                <div className="value">I Dont Know</div>
            </article>
            <Recharts data={data}/>
            </div>
            <MainTable />
        </div>
    </div>
    )
}

export default Info