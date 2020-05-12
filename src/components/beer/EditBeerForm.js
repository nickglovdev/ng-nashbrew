import React, { useContext, useState } from "react"
import { BeerContext } from "./BeerProvider"


export const EditBeerForm = ({ beer, toggleEdit }) => {
    const { updateBeer } = useContext(BeerContext)

    const { updatedBeer, setBeer } = useState(beer)

    const beerHandleInputChange = (event) => {
        const newBeer = Object.assign({}, updatedBeer)

        newBeer[event.target.name] = event.target.value

        setBeer(newBeer)
    }

    const editBeer = () => {
        updateBeer({
            id: updatedBeer.id,
            beerName: updatedBeer.beerName,
            howManyBeers: updatedBeer.howManyBeers,
            price: updatedBeer.price,
            alcoholContent: updatedBeer.alcoholContent,
            breweryId: parseInt(updatedBeer.breweryId),
            beerTypeId: parseInt(updatedBeer.beerTypeId)
        })
            .then(toggleEdit)

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
                    <label htmlFor="howManyBeers">Hours of Operation: </label>
                    <input type="text" name="howManyBeers" required autoFocus className="form-control"
                        placeholder="Beers In a Container"
                        defaultValue={beer.howManyBeers}
                        onChange={beerHandleInputChange}
                    />
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
