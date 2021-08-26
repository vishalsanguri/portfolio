import React from 'react'
import "./About.css"
export default function About() {
    return (<div style={{backgroundColor:" #0e1523"}}>
            <div className="textimagediv">
                <div className="text1div">My name is Vishal Sanguri . I am a freelancer website designer and developer from Uttarakhand , India .I create professional websites . <br />
                This is my portfolio , below i have discussed about the resources  that were required to build this project.
                </div>
                <div className="myimagediv"></div>
            </div>
            <div>
                <div className="headingofresouce">HTML</div>
                <div className="descriptionofresource">The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. <br />Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</div>
            </div>
            <div>
                <div className="headingofresouce">CSS</div>
                <div className="descriptionofresource">
                Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.
                </div>
            </div>
            <div>
                <div className="headingofresouce">JAVA SCRIPT</div>
                <div className="descriptionofresource">
                JavaScript , often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on the user's device.
                </div>
            </div>
            <div>
                <div className="headingofresouce">REACT</div>
                <div className="descriptionofresource">
                React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality
                </div>
            </div>
        </div>
    )
}
