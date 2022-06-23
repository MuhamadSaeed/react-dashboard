import React, {} from 'react'
import "./nav.scss"
import {AiOutlineSearch, AiOutlineMessage, AiOutlineDashboard} from "react-icons/ai"
import {IoMdNotificationsOutline, IoMdMoon} from "react-icons/io"
import {TbLanguage} from "react-icons/tb"

function Nav({toggle, setToggle, dark, setDark}) {
    let handleClick = () => {
        setToggle(true)
    }
  return (
    <nav>
        <div className="container">
            <div className="left">
                <div className="toggle" onClick={handleClick} ><span></span><span></span><span></span></div>
                <div className="search">
                    <input type="text" placeholder='Search...'/>
                    <AiOutlineSearch className='searchIcon'/>
                </div>
            </div>
            <div className="right">
                <div className="lang">
                    <TbLanguage className='langIcon'/>
                    <span>English</span>
                </div>
                <div className="icons">
                    <div className="icon"><IoMdMoon onClick={() => setDark(!dark)}/></div>
                    <div className="icon"><AiOutlineMessage /> <span>1</span></div>
                    <div className="icon"><IoMdNotificationsOutline /> <span>4</span></div>
                    <div className="icon"><AiOutlineDashboard /></div>
                </div>
                <div className="user">user</div>
            </div>
        </div>
        <div className="after"></div>
    </nav>
  )
}

export default Nav