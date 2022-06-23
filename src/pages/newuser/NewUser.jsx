import React from "react";
import Nav from "../../components/nav/Nav";
import Slid from "../../components/slid/Slid";
import New from "../../components/new/New";
import { data } from "./data";

function NewUser({ dark, setDark, toggle, setToggle }) {
    return (
        <div>
            <Slid toggle={toggle} setToggle={setToggle} />
            <Nav
                toggle={toggle}
                setToggle={setToggle}
                dark={dark}
                setDark={setDark}
            />
            <New data={data} title="User" />
        </div>
    );
}

export default NewUser;
