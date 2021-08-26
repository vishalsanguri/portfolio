import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"


export default function Portal({ setShow }) {
    return ReactDOM.createPortal((
        <div className="makeittransparent" onClick={() => { setShow(false) }}>
            <div className="portaldiv">
                <div style={{ position: "relative" }}>
                    <div className="jaadu" onClick={() => { setShow(false) }} style={{ position: "absolute", right: "0" }}>
                        <AiOutlineClose />
                    </div>
                    <div className="listclass">
                        <ul className="itemlist">
                            <Link style={{textDecoration:"none",color:"white"}} to="/">
                                <li className="item">
                                    Home
                                </li><div className="bar1" />
                            </Link>
                            <Link style={{textDecoration:"none",color:"white"}} to="/about">
                                <li className="item">
                                    About
                                </li><div className="bar1" />
                            </Link>
                            <Link style={{textDecoration:"none",color:"white"}} to="/contact">
                                <li className="item">
                                    Contact
                                </li><div className="bar1" />
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="closediv" onClick={() => { setShow(false) }}>
            </div>
        </div>

    ), document.getElementById("port"))
}
