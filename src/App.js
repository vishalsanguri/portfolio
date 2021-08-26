import React from 'react'
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Weather from "./components/Weather/Weather"
import Services from "./components/Recipe/Services"


export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/recipe" component={Services} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

