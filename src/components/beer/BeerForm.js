import React, { useContext, useRef } from "react"
import { BeerContext } from "./BeerProvider"
import { BreweryContext } from "../brewery/BreweryProvider"
import { BeerTypeContext } from "../beerType/BeerTypeProvider"

export default props => {
    const { addBeer } = useContext(BeerContext)
    const { breweries } = useContext(BreweryContext)
    const { beerTypes } = useContext(BeerTypeContext)

    const beerName = useRef()
    const howManyBeers = useRef()
    const price = useRef()
    const alcoholContent = useRef()
    const breweryId = useRef()
    const beerTypeId = useRef()

    const constructNewBeer = () => {


       const newBeerObject = {
                beerName: beerName.current.value,
                howManyBeers: howManyBeers.current.value,
                price: price.current.value,
                alcoholContent: alcoholContent.current.value,
                breweryId: parseInt(breweryId.current.value),
                beerTypeId: parseInt(beerTypeId.current.value)
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
                    <label htmlFor="howManyBeers">Beers in a Pack: </label>
                    <input
                        type="number"
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
                    <label htmlFor="price">Price: </label>
                    <input
                        type="number"
                        id="price"
                        ref={price}
                        required
                        autoFocus
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="alcoholContent">Alcohol Content: </label>
                    <input
                        type="text"
                        id="alcoholContent"
                        ref={alcoholContent}
                        required
                        autoFocus
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breweryId">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="breweryId"
                        ref={breweryId}
                        id="breweryId"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {breweries.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.breweryName}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="beerTypeId">Type of Beer: </label>
                    <select
                        defaultValue=""
                        name="beerTypeId"
                        ref={beerTypeId}
                        id="beerTypeId"
                        className="form-control"
                    >
                        <option value="0">Type of Beer</option>
                        {beerTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
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