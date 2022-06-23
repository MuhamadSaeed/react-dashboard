import React from 'react'
import "./progressbar.scss"
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import {AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai"
import data from './data'
function Progressbar() {
    return (
        <div className='progressbar'>
        <div className="container">
            <h3>Total Revenue</h3>
            <div className="main">
                <CircularProgressbar className='progress__bar' value={80} text="80%" strokeWidth={6}/>
            </div>
            <h4 className='titleofpro'>total sels made today</h4>
            <div className="num">$100</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum. Lorem, ipsum dolor.</p>
            <div className="details">
                {data.map(item => {
                    return (
                        <div className="one" key={item.id}>
                        <h4>{item.title}</h4>
                        <div className="info" style={item.up ? {color: "green"} : {color: "red"}}>
                            {item.up ? <AiOutlineArrowUp /> : <AiOutlineArrowDown /> } {item.money}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Progressbar