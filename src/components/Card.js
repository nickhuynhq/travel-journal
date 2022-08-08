import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <div className="card--left-column">
                <img src={`../images/${props.item.img}`} className="card--image"/>
            </div>
            
            <div className="card--article-column">
            <i class="fa fa-map-marker card--icon" aria-hidden="true"></i><span className="card--country">{props.item.country}</span>
                <span><a href={props.item.mapLink} className="view-link">View on Google Maps</a></span>
                <h1 className="card--location">{props.item.location}</h1>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--info">{props.item.info}</p>
            </div>
            
        </div>
    )
}