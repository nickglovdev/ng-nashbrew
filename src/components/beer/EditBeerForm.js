import React, { useContext, useState } from "react"
import { BeerContext } from "./BeerProvider"
import { BreweryContext } from "../brewery/BreweryProvider"
import { BeerTypeContext } from "../beerType/BeerTypeProvider"


export const EditBeerForm = ({ beer, toggleEdit }) => {
        const { updateBeer } = useContext(BeerContext)
        const { breweries } = useContext(BreweryContext)
        const { beerTypes } = useContext(BeerTypeContext)

        // Separate state variable to track the animal as it is edited
        const [ updatedBeer, setBeer ] = useState(beer)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const beerHandleInputChange = (event) => {
        // Create a new copy of the animal being edited
        const newBeer = Object.assign({}, updatedBeer)

        // Change the property value on the copy
        newBeer[event.target.name] = event.target.value

        // Set the copy as the new state
        setBeer(newBeer)
    }

    const editBeer = () => {
        const breweryId = parseInt(updatedBeer.breweryId)
        const beerTypeId = parseInt(updatedBeer.beerTypeId)

        if (breweryId === 0 && beerTypeId === 0) {
            window.alert("Please select a location")
        } else {
            updateBeer({
                id: updatedBeer.id,
                beerName: updatedBeer.beerName,
                howManyBeers: updatedBeer.howManyBeers,
                price: updatedBeer.price,
                alcoholContent: updatedBeer.alcoholContent,
                breweryId: breweryId,
                beerTypeId: beerTypeId
            })
                .then(toggleEdit)
        }
    }
    return (
        <form className="beerEditForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="beerName">Brewery name: </label>
                    <input type="text" name="beerName" required autoFocus className="form-control"
                        placeholder="Beer Name"
                        defaultValue={beer.beerName}
                        onChange={beerHandleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="howManyBeers">Beers in a Pack </label>
                    <input type="text" name="howManyBeers" required autoFocus className="form-control"
                        placeholder="Beers In a Container"
                        defaultValue={beer.howManyBeers}
                        onChange={beerHandleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Hours of Operation: </label>
                    <input type="text" name="price" required autoFocus className="form-control"
                        placeholder="Price"
                        defaultValue={beer.price}
                        onChange={beerHandleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="alcoholContent">Hours of Operation: </label>
                    <input type="text" name="alcoholContent" required autoFocus className="form-control"
                        placeholder="Alcohol Content"
                        defaultValue={beer.alcoholContent}
                        onChange={beerHandleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breweryId">Location: </label>
                    <select name="breweryId" className="form-control"
                        defaultValue={beer.breweryId}
                        onChange={beerHandleInputChange}>

                        <option value="0">Select a location</option>
                        {breweries.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="beerTypeId">Location: </label>
                    <select name="beerTypeId" className="form-control"
                        defaultValue={beer.beerTypeId}
                        onChange={beerHandleInputChange}>

                        <option value="0">Select a location</option>
                        {beerTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editBeer()
                }}>
                Save Updates
            </button>
        </form>
    )
}
