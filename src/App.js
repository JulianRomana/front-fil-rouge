import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
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
import UserQuests from "./pages/UserQuests"
import QuestCard from "./components/QuestCard/QuestCard"
import GreenWalk from "./pages/GreenWalk"
import Subject from "./components/Subject/Subject"
import { routes } from "./routes"

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/home" render={() => <Home routes={routes} />} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/order" component={Station} />
        <Route exact path="/scooter" component={Scooter} />
        <Route exact path="/greenwalk" component={GreenWalk} />
        <Route exact path="/restaurant" component={Restaurant} />
        <Route exact path="/bike" component={Velib} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/user-quests" component={UserQuests} />
        <Route path="/user-quests/:id" component={QuestCard} />
        <Route path="/quest/:id" component={Quest} />

        {routes.map(({ category, themes }) => (
          <Route
            key={category.link}
            path={`/${category.link}`}
            render={() => <Subject themes={themes} />}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default App
