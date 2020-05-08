import React from "react"

// When we use Animal component in AnimalList, React takes the keys passed
// to the Animal component and puts it into one object
export const Beer = ({beer}) => (
    <section className="beerData">
        <div>Name of Beer: {beer.beerName}</div>
        <div>Number in a Pack: {beer.howManyBeers}</div>
        <div>Price: ${beer.price}</div>
        <div>Alcohol Content: {beer.alcoholContent}%</div>
    </section>
)