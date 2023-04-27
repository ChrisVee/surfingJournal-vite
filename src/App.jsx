import React from "react"
import ReactDOM from "react-dom"
import Card from "./components/Card"
import Nav from "./components/Nav"
import data from "/data"

export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.title}
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                travelDate={item.travelDate}
                description={item.description}
                imageUrl={item.imageUrl}
            />
        )
    })

    return (
        <>
            <Nav />
            {cards}
        </>
    )
}