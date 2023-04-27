import React from "react"
import ReactDOM from "react-dom"
import data from "../data"
import pic from "../images"

export default function Card(props) {

    return (
        <div className="card--container">
            <div className="card--image">
                <img src={props.imageUrl} className="card--image" />
            </div>
            <div className="card-information">
                <div className="location--container">
                    <img className="location--icon" src="/images/locationIcon.png" />
                    <p className="location">{props.location}</p>
                    <p className="googleMapsLocation">
                        <a href={props.googleMapsUrl}>
                            View on Google Maps
                    </a>
                    </p>
                </div>
                <div className="location--info">
                    <h1 className="destination">{props.title}</h1>
                    <p className="dates">{props.travelDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
