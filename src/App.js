import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Environment from "./pages/Environment"
import Header from "./modules/Header"
import Login from "./pages/Login"
import Quest from "./pages/Quest"
import Signup from "./pages/SignUp"
import SplashScreen from "./pages/SplashScreen"
import Station from "./pages/Station"
import Trash from "./pages/Trash"

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
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default App
