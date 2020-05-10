import React from "react"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"

// When we use Animal component in AnimalList, React takes the keys passed
// to the Animal component and puts it into one object
export const Beer = ({beer}) => {
    return (   
    <section className="beerData">
        <div className="beer-space">Name of Beer: {beer.beerName}</div>
        <div className="beer-space">Beers in a Pack: {beer.howManyBeers}</div>
        <div className="beer-space">Price: ${beer.price}</div>
        <div className="beer-space">Alcohol Content: {beer.alcoholContent}%</div>
    </section>
    )
}