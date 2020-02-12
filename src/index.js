import React from "react"
import ReactDOM from "react-dom"
import "./assets/styles/App.css"
import env from "dotenv"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

env.config()
ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
