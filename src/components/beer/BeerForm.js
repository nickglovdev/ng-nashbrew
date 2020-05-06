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
    const alcholContent = useRef()
    const breweryId = useRef()
    const beerTypeId = useRef()

    const constructNewBeer = () => {


       const newBeerObject = {
                beerName: beerName.current.value,
                howManyBeers: howManyBeers.current.value,
                price: price.current.value,
                alcholContent: alcholContent.current.value,
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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="alcholContent">Alchol Content: </label>
                    <input
                        type="text"
                        id="alcholContent"
                        ref={alcholContent}
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
                        name="Brewery"
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
                    <label htmlFor="beerTypeId">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="beerTypeId"
                        ref={beerTypeId}
                        id="beerTypeId"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
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