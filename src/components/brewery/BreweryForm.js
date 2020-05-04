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
                    <label htmlFor="breweryName">Name of Bewery</label>
                    <input
                        type="text"
                        id="brewery"
                        ref={breweryName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Brewery Name"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick = {
                    evt => {
                        evt.preventDefault()
                        constructNewBrewery()
                    }
                }
                    className="btn btn-primary">
                    Add Brewery
             </button>
                }
        </form>
    )
}
