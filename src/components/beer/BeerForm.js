import React, { useContext, useRef } from "react"
import { BeerContext } from "./BeerProvider"

export default props => {

    const { addBeer } = useContext(BeerContext)

    const beerName = useRef()
    const howManyBeers = useRef()
    const price = useRef()
    const alcholContent = useRef()
    const breweryId = useRef()
    const beerTypeId = useRef()

    const constructNewBeer = () => {
       const newBeerObject = {
                beerName: beerName.current.value,
                howManyBeers: howManyBeers.current.value,
                price: price.content.value,
                alcholContent: alcholContent.content.value,
                breweryId: parseInt(breweryId.current.value),
                beerTypeId: parseInt(beerTypeId.current.value),
            }
        addBeer(newBeerObject).then(props.toggles)
    }

    return(
        <form className="beerForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="beerName">Name of Beer: </label>
                    <input
                        type="text"
                        id="beerName"
                        ref={beerName}
                        required
                        autoFocus
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="howManyBeers">Number of Beers: </label>
                    <input
                        type="text"
                        id="howManyBeers"
                        ref={howManyBeers}
                        required
                        autoFocus
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="beerName">Name of Beer: </label>
                    <input
                        type="text"
                        id="beerName"
                        ref={beerName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Beer Name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input
                        type="text"
                        id="price"
                        ref={price}
                        required
                        autoFocus
                        className="form-control"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        // create the beer function goes here
                        constructNewBeer()
                    }
                }
                className="btn btn-primary">
                New Beer
            </button>
        </form>


    )

}