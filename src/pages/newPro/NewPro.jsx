import React from "react";
import New from "../../components/new/New";
import { data } from "./data";
import Slid from "../../components/slid/Slid";
import Nav from "../../components/nav/Nav";

function NewPro({ dark, setDark, toggle, setToggle }) {
    return (
        <div>
            <Slid toggle={toggle} setToggle={setToggle} />
            <Nav
                toggle={toggle}
                setToggle={setToggle}
                dark={dark}
                setDark={setDark}
            />
            <New data={data} title="Product" />
        </div>
    );
}

export default NewPro;
