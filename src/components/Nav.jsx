import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card"

export default function Nav () {
    return (
        <div className="nav--container">
            <img src="./images/man.png" className="nav--logo" width="30px"/>
            <h3 className="nav--title">My Surf Adventures</h3>
        </div>
    )
}