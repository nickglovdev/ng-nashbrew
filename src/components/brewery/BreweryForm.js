import React, { useContext, useRef } from "react"
import { BreweryContext } from "./BreweryProvider"


export default props => {
    const { addBrewery } = useContext(BreweryContext)

    const breweryName = useRef()
    // const hoursOfOperation = useRef()
    // const curbSidePickUp = useRef()
    // const delivery = useRef()
    // const location = useRef()

    const constructNewBrewery = () => {
        const userId = parseInt(localStorage.getItem("nashBrew_user"))

        const newBrewery = {
            breweryName: breweryName.current.value,
            // hoursOfOperation: hoursOfOperation.current.value,
            // curbSidePickUp: curbSidePickUp.current.value,
            // delivery: delivery.current.value,
            // location: location.current.value,
            userId: userId
        }
        console.log(newBrewery)
        addBrewery(newBrewery).then(props.toggles)
    }

    return (
        <form className="breweryForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Breed of Animal: </label>
                    <input
                        type="text"
                        id="animalBreed"
                        ref={breed}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="animal breed"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick = {
                    evt => {
                        evt.preventDefault
                        constructNewBrewery()
                    }
                }
                    className="btn btn-primary">
             </button>
                    Add Brewery
                }
        </form>
    )
}
