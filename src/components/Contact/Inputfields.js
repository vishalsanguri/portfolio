import React from 'react'
import { useField,ErrorMessage } from "formik";
export default function Inputfields({showme,label,...props}) {
    const [fields,meta]=useField(props)
    return (
        <div className="inputfieldsdiv">
            <label style={{marginTop:"3px",marginBottom:"3px"}} htmlFor="{fields.name}">{label}</label> <br />
            <input className="inputhere" {...fields} {...props}/> <br />
            {showme?<ErrorMessage component="div" className="errordiv" name={fields.name} />:null}
        </div>
    )
}
