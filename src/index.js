import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "mapbox-gl/dist/mapbox-gl.css"
import "./assets/scss/styles.scss"

import moment from "moment"
import "moment/min/locales"

moment.locale("fr")
require("dotenv").config()

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
