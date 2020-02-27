import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Environment from "./pages/Environment"
import Header from "./modules/Header"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Quest from "./pages/Quest"
import Signup from "./pages/SignUp"
import SplashScreen from "./pages/SplashScreen"
import Station from "./pages/Station"
import Velib from "./pages/Velib"
import Restaurant from "./pages/Restaurant"
import Scooter from "./pages/Scooter"
import Trash from "./pages/Trash"
import UserQuests from "./pages/UserQuests"
import QuestCard from "./components/QuestCard/QuestCard"
import GreenWalk from "./pages/GreenWalk"

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
        <Route exact path="/scooter" component={Scooter} />
        <Route exact path="/greenwalk" component={GreenWalk} />
        <Route exact path="/restaurant" component={Restaurant} />
        <Route exact path="/velib" component={Velib} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/user-quests" component={UserQuests} />
        <Route path="/user-quests/:id" component={QuestCard} />
        <Route path="/quest/:id" component={Quest} />
      </Switch>
    </Router>
  )
}

export default App
