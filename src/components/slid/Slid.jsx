import React from 'react'
import "./slid.scss"
import {Link} from "react-router-dom" 
import {GrLanguage} from "react-icons/gr"


function Slid({toggle, setToggle}) {
    let nums = [215, 175, 15, 14, 40, 20]
    window.onclick = (e) => {
        for (let i = 0; i < nums.length; i ++) {
            if (e.target.offsetWidth === nums[i]) {
                setToggle(true)
                return;
            } else {
                setToggle(false)
            }
        }
    }

  return (
    <aside className={toggle ? "open" : ""} >
        <div className="after"></div>
        <div className="container">
            <h2>Admin</h2>
            <h1 className="close" onClick={() => setToggle(false)}>x</h1>
            <hr></hr>
            <ul>
                <h4>main</h4>
                <Link to="/"><li><span className="icon"></span><span className="name">Dashboard</span></li></Link>
                <h4>lists</h4>
                <Link to="/users"><li><span className="icon"></span><span className="name">users</span></li></Link>
                <Link to="/products"><li><span className="icon"></span><span className="name">products</span></li></Link>
                <li><span className="icon"></span><span className="name">orders</span></li>
                <li><span className="icon"></span><span className="name">deleviry</span></li>
                <h4>usful links</h4>
                <li><span className="icon"></span><span className="name">status</span></li>
                <li><span className="icon"></span><span className="name">notifications</span></li>
                <h4>services</h4>
                <li><span className="icon"></span><span className="name">system health</span></li>
                <li><span className="icon"></span><span className="name">logs</span></li>
                <li><span className="icon"></span><span className="name">settings</span></li>
                <h4>users</h4>
                <li><span className="icon"></span><span className="name">profile</span></li>
                <li><span className="icon"></span><span className="name">log out</span></li>
            </ul>
                <hr></hr>
            <div className="lang">
                <GrLanguage className='langIcon'/>
                <span>English</span>
            </div>
        </div>
    </aside>
  )
}

export default Slid