import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import './style.css';
 

export default function App(){
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return(
        <div className="app">
            <Navbar /> 
            <section className="section-card">
                {cards}
            </section>       
            
            
            

        </div>
    )
};