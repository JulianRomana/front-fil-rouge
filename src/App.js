import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"
import SplashScreen from "./pages/SplashScreen"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Header from "./modules/Header"

const App = () => {
  const Main = styled.main`
    padding: 5rem 1rem 1rem;
  `

  return (
    <Router>
      <Header />
      <Switch>
        <Main>
          <Route exact path="/" component={SplashScreen} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Main>
      </Switch>
    </Router>
  )
}

export default App
