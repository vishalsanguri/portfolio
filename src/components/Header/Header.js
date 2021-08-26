import React, { useState } from 'react'
import { DiCssdeck } from "react-icons/di"
import { AiOutlineAlignCenter } from "react-icons/ai"
import "./Header.css"
import Portal from "./Portal"


export default function Header() {
    const [show, setShow] = useState(false)
    return (
        <div className="headerdiv">
            <div className="open" onClick={() => { setShow(true) }}>
                <AiOutlineAlignCenter />
            </div>
            {show ? <div>
                <Portal setShow={setShow} />
            </div> :
                null}

            <div className="portfolio">
                <DiCssdeck />
                Portfolio
            </div></div>
    )
}
