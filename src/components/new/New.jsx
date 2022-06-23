import React, {useState} from 'react'
import "./new.scss"
import {AiOutlineUpload} from "react-icons/ai"
import Img from "../../images/1.jpg"

function New({data, title}) {
    let [file, setFile] = useState("")
  return (
    <div className='newPage'>
        <div className="containerNew">
            <div className="addAUser">
                <h2>Add A {title}</h2>
                <div className="main">
                    <div className="img"><img src={file ? URL.createObjectURL(file) : Img}  alt="" /></div>
                    <form action="">
                        <label htmlFor="file" className='iconupload'><AiOutlineUpload className='icon'/></label>
                        <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{display: "none"}}/>
                        {data.map(input => {
                            return (
                                <div className="inp" key={input.id}>
                                    <label >{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}/>
                                </div>
                            )
                        })}
                        <button>send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New