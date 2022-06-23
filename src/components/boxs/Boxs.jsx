import React, { useState } from "react";
import "./boxs.scss";
import data from "./Boxsdata";

function Boxs() {

    let [shadow, setShadow] = useState()

    let handleHover = (color) => {
        setShadow(`200px`)
    }
    let hdLeave = () => {
        setShadow("")
    }
    return (
        <div className="homeboxs">
            <div className="container">
                <div className="boxs">
                    {data.map(({ id, name, amount, link, icon, ismoney, color }) => {
                        return (
                            <div className="box" onMouseLeave={hdLeave} onMouseOver={() => handleHover(color)} key={id}>
                                <div className="left">
                                    <h2>{name}</h2>
                                    <div className="amount">
                                        {ismoney ? `${amount} $` : amount}
                                    </div>
                                    <div className="link">{link}</div>
                                </div>
                                <div
                                    className="right"
                                    style={{
                                        background: color,
                                        height: "fit-content",
                                        borderRadius: "5px",
                                        color: "#fff",
                                        padding: "5px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: `0 0 0 ${shadow} ${color}`,
                                        transition: "0.3s"
                                    }}
                                >
                                    {icon}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Boxs;
