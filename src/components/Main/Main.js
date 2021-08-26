import React, { useEffect, useState } from 'react'
import { useTransition, animated } from "react-spring"
import { AiFillGithub, AiOutlineMail, AiFillFacebook } from "react-icons/ai"
import "./Main.css"
import { Link } from "react-router-dom"



export default function Main() {
    const [heading, setHeading] = useState(false)
    const transition = useTransition(heading, {
        from: { opacity: 0 },
        enter: { opacity: 1, delay: 300 },
        leave: { opacity: 0 }
    })
    useEffect(() => { setHeading(true) }, [])
    return (
        <div className="maindiv">
            <div className="maindiv1">
                {transition((style, item) =>
                    item ? <animated.div className="animatediv" style={style}>Welcome To My Portfolio</animated.div> : null
                )}
                <div className="bar">
                    <div className="whitebar1"></div>
                </div>
            </div>
            <div className="maindiv2">
                <div>
                    let me introduse myself <br />
                    <div className="aboutdiv" >
                        ABOUT ME
                    </div> <br />
                    My name is Vishal Sanguri . I am a freelancer <br /> website designer and  developer <br /> from Uttarakhand , India . I <br />
                    create professional websites .  <br />
                    <Link style={{ textDecoration: "none" }} to="/about">
                        <div className="submaindiv2">Read More</div>
                    </Link>
                </div>
                <div className="icons">
                    <div onClick={() => { window.open("https://github.com/vishalsanguri") }} className="iconsstyle">
                        <AiFillGithub size="1.5em" />
                    </div>
                    <div className="iconsstyle"><AiOutlineMail size="1.5em" /></div>
                    <div onClick={() => { window.open("https://www.facebook.com") }} className="iconsstyle"><AiFillFacebook size="1.5em" /></div>
                </div>
            </div>
            <div className="bar">
                <div className="whitebar2"></div>
            </div>
            <div className="maindiv4">
                <div className="aboutdiv">
                    PROJECTS
                </div>
                <div className="projectdiv">
                    <div className="projectdiv1">
                        <div className="minidivimg1">
                        </div>
                        <div className="minidiv">
                            Weather App <br />this app uses weather api to fetch the data. <br />
                            <Link to="/weather">
                                <button className="minidivbutton">visit</button>
                            </Link>
                        </div>
                    </div>
                    <div className="projectdiv1">
                        <div className="minidivimg2">
                        </div>
                        <div className="minidiv">
                            Recipe App <br />this app uses api to fetch the data and is fully responsive. <br />
                            <Link to="/recipe">
                                <button className="minidivbutton">visit</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bar">
                <div className="whitebar1"></div>
            </div>
            <div className="maindiv3">
                <div className="aboutdiv">
                    SKILLS
                </div> <br />
                <div className="skilldiv">
                    <div style={{ marginTop: "5px" }}>
                        HTML : 80%
                        <br />
                        <div className="skillbar"><div className="skillbarin1"></div></div>
                    </div>
                    <div style={{ marginTop: "5px" }}>
                        CSS : 90%
                        <br />
                        <div className="skillbar"><div className="skillbarin2"></div></div>
                    </div>
                    <div style={{ marginTop: "5px" }}>
                        JAVA SCRIPT : 70%
                        <br />
                        <div className="skillbar"><div className="skillbarin3"></div></div>
                    </div>
                    <div style={{ marginTop: "5px" }}>
                        REACT : 60%
                        <br />
                        <div className="skillbar"><div className="skillbarin4"></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
