import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SplashScreen from "./pages/SplashScreen"
import Signup from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Header from "./modules/Header"

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
