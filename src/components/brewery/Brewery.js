import React from "react"

// When we use Animal component in AnimalList, React takes the keys passed
// to the Animal component and puts it into one object
export const Brewery = ({brewery}) => (
    <section className="breweryData">
        <div>Brewery Name: {brewery.breweryName}</div>
        <div>Hours Of Operation: {brewery.hoursOfOperation}</div>
        <div>Curb Side Pick Up: {brewery.curbSidePickUp ? "Yes" : "No"}</div>
        <div>Delivery: {brewery.delivery ? "Yes" : "No"}</div>
        <div>Location: {brewery.location}</div>
    </section>
)