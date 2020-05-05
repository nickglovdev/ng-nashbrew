import React from "react"

// When we use Animal component in AnimalList, React takes the keys passed
// to the Animal component and puts it into one object
export const Beer = ({beer, brewery }) => (
    <section className="breweryData">
        <div>Hello</div>
        <div>{beer.beerName}</div>
        <div>{brewery.breweryName}</div>
    </section>
)