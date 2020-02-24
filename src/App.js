import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SplashScreen from "./pages/SplashScreen"
import Signup from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Environment from "./pages/Environment"
import Trash from "./pages/Trash"
import Station from "./pages/Station"
import Quest from "./pages/Quest"
import Header from "./modules/Header"

const App = () => {
  return (
    <Router onChange={() => window.scrollTo(0, 0)}>
      <Header />
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/environment" component={Environment} />
        <Route exact path="/trash" component={Trash} />
        <Route exact path="/station" component={Station} />
        <Route exact path="/quest" component={Quest} />
      </Switch>
    </Router>
  )
}

export default App
