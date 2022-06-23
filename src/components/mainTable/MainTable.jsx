import React from "react";
import "./mainTable.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Img1 from "../../images/1.jpg"
import Img2 from "../../images/2.jpg"
import Img3 from "../../images/3.png"
import Img4 from "../../images/4.jpg"
import Img5 from "../../images/5.jpg"
import Img6 from "../../images/6.jpg"

function MainTable() {

    let rows = [
        {
            id: 1,
            product: "HTML Book",
            img: Img1,
            customer: "Hamada",
            date: "1 March",
            amount: 25,
            method: "cash",
            status: "Approved",
        },
        {
            id: 2,
            product: "CSS Book",
            img: Img2,
            customer: "Mohamed",
            date: "18 Jun",
            amount: 20,
            method: "cash",
            status: "Approved",
        },
        {
            id: 3,
            product: "JS Book",
            img: Img3,
            customer: "Ali",
            date: "1 Feb",
            amount: 15,
            method: "Del",
            status: "Pendding",
        },
        {
            id: 4,
            product: "JS Book",
            img: Img4,
            customer: "Sayed",
            date: "25 Jun",
            amount: 29,
            method: "cash",
            status: "Approved",
        },
        {
            id: 5,
            product: "React Book",
            img: Img5,
            customer: "Mossad",
            date: "1 march",
            amount: 60,
            method: "cash",
            status: "Pendding",
        },
        {
            id: 6,
            product: "Bootstrap Book",
            img: Img6,
            customer: "Hamada",
            date: "1 April",
            amount: 25,
            method: "Del",
            status: "Pendding",
        },
    ]

    return (
        <div className="maintable">
            <h2>latest transactions</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">id</TableCell>
                            <TableCell className="tableCell">product</TableCell>
                            <TableCell className="tableCell">customer</TableCell>
                            <TableCell className="tableCell">date</TableCell>
                            <TableCell className="tableCell">amount</TableCell>
                            <TableCell className="tableCell">method</TableCell>
                            <TableCell className="tableCell">status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell className="tableCell" component="th" scope="row">{row.id}</TableCell>
                                <TableCell className="tableCell imgWithProd" ><img className="tableRowImg" src={row.img} alt={row.product} /> <span>{row.product}</span> </TableCell>
                                <TableCell className="tableCell">{row.customer}</TableCell>
                                <TableCell className="tableCell">{row.date}</TableCell>
                                <TableCell className="tableCell">{row.amount}</TableCell>
                                <TableCell className="tableCell">{row.method}</TableCell>
                                <TableCell className="tableCell"> <li className={row.status === "Approved" ? "rowStatus appr" : "rowStatus penn"}>{row.status}</li></TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MainTable;
