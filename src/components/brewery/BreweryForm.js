import React, { useContext, useRef } from "react"
import { BreweryContext } from "./BreweryProvider"


export default props => {
    const { addBrewery } = useContext(BreweryContext)

    const breweryName = useRef()
    const hoursOfOperation = useRef()
    const curbSidePickUp = useRef()
    const delivery = useRef()
    const location = useRef()

    const constructNewBrewery = () => {
        const userId = parseInt(localStorage.getItem("nashBrew_user"))
        
        
        const newBrewery = {
            breweryName: breweryName.current.value,
            hoursOfOperation: hoursOfOperation.current.value,
            //Converting the string of true and false to a boolean
            curbSidePickUp: JSON.parse(curbSidePickUp.current.value),
            delivery: JSON.parse(delivery.current.value),
            location: location.current.value,
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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breweryHoursOfOperation">Hours Of Operation</label>
                    <input
                        type="text"
                        id="breweryHoursOfOperation"
                        ref={hoursOfOperation}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Hours of Operation"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="brewerycurbSidePickUp">Curb Side Pick Up</label>
                    <select
                        defaultValue=""
                        id="brewerycurbSidePickUp"
                        ref={curbSidePickUp}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Curb Side Pick Up"
                    >
                        <option value= "false">Select</option>
                        <option value = "true">Yes</option>
                        <option value = "false">No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breweryDelivery">Delivery</label>
                    <select
                        defaultValue=""
                        id="breweryDelivery"
                        ref={delivery}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Delivery"
                    >
                        <option value="false">Select </option>
                        <option value = "true">Yes</option>
                        <option value = "false">No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breweryLocation">Location</label>
                    <input
                        type="text"
                        id="breweryLocation"
                        ref={location}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Location"
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
                
        </form>
    )
}
