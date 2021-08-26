import React, { useState } from 'react'
import Inputfields from './Inputfields';
import { Formik, Form } from "formik";
import "./Contact.css"
import * as Yup from "yup"



export default function Contact() {
    const [showme, setShowme] = useState(false)
    const validate = Yup.object({
        name: Yup.string()
            .max(15, "should not exceed 15 characters").required("please provide your name"),
        email: Yup.string()
            .email("not a valid mail").required("please provide your mail"),
        experience: Yup.string()
            .required("please share your experience")
    })
    return (
        <div className="contactdiv">
            <div className="divfivefive"></div>
            <div className="divfourfive"></div>
            <div className="contactimage">
                <div className="contactdiv1">
                    <div style={{ paddingLeft: "20px", paddingRight: "20px", marginBottom: "20px", fontSize: "2.5vw" }}>CONTACT :</div>
                    <div className="foralldiv">Email :- vishal30dev@gmail.com</div>
                    <div className="foralldiv">Mobile :- 999xxxxx89</div>
                    <div className="foralldiv">Github :- https://github.com/vishalsanguri</div>
                </div>
                <div className="formikdiv">
                    <div style={{ marginBottom: "20px", fontSize: "2.5vw" }}>REVIEW :</div>
                    <div className="reviewusdiv">
                        <div className="cardformik">
                            <Formik
                                initialValues={{ name: "", email: "", experience: "" }}
                                onSubmit={(value) => {console.log(value)}}
                                validationSchema={validate}
                            >
                                {() => {
                                    return (
                                        <Form className="formdiv">
                                            <Inputfields showme={showme} label="Name" name="name" type="text" />
                                            <Inputfields showme={showme} label="Email" name="email" type="email" />
                                            <Inputfields showme={showme} label="Experience" name="experience" type="text" />
                                            <button className="greencolor" type="submit" onClick={()=>{setShowme(true)}}>Submit</button>
                                            <button className="redcolor" type="reset">Reset</button>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
