import React from 'react'
import "./home.scss"
import Slid from "../../components/slid/Slid"
import Nav from '../../components/nav/Nav'
import Boxs from '../../components/boxs/Boxs'
import Progressbar from '../../components/progressbar/Progressbar'
import Recharts from '../../components/recharts/Recharts'
import MainTable from '../../components/mainTable/MainTable'
import {data} from "./RechartsData"

function Home({dark, setDark, toggle, setToggle}) {


  return (
    <div className='home'>
      <Slid toggle={toggle} setToggle={setToggle}/>
      <div className="containerHome">
        <Nav toggle={toggle} setToggle={setToggle}  dark={dark} setDark={setDark}/>
        <Boxs />
        <div className="main">
          <div className="info">
              <Progressbar />
              <Recharts data={data}/>
          </div>            
          <div className="tablee">
          <MainTable />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home