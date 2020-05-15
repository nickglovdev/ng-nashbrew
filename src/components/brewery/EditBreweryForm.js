import React, { useContext, useState } from "react"
import { BreweryContext } from "./BreweryProvider"



export const EditBreweryForm = ({ brewery, toggleEdit }) => {
    const { updateBrewery } = useContext(BreweryContext)

    const [updatedBrewery, setBrewery] = useState(brewery)

    const breweryHandInputChange = (event) => {
        const newBrewery = Object.assign({}, updatedBrewery)

        newBrewery[event.target.name] = event.target.value

        setBrewery(newBrewery)
    }

    const editBrewery = () => {
        
        const delivery = JSON.parse(updatedBrewery.delivery)
        const curbSidePickUp = JSON.parse(updatedBrewery.curbSidePickUp)
        debugger
        updateBrewery({
            id: updatedBrewery.id,
            breweryName: updatedBrewery.breweryName,
            hoursOfOperation: updatedBrewery.hoursOfOperation,
            curbSidePickUp: curbSidePickUp,
            delivery: delivery,
            location: updatedBrewery.location,
            userId: parseInt(localStorage.getItem("nashBrew_user"))
        })
            .then(toggleEdit)

    }
    return (
        <form className="breweryEditForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breweryName">Brewery name: </label>
                    <input type="text" name="breweryName" required autoFocus className="form-control"
                        placeholder="Brewery name"
                        defaultValue={brewery.breweryName}
                        onChange={breweryHandInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hoursOfOperation">Hours of Operation: </label>
                    <input type="text" name="hoursOfOperation" required autoFocus className="form-control"
                        placeholder=""
                        defaultValue={brewery.hoursOfOperation}
                        onChange={breweryHandInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="curbSidePickUp">Curb Side Pick Up: </label>
                    <select type="text" name="curbSidePickUp" required autoFocus className="form-control"
                        placeholder=""
                        defaultValue={brewery.curbSidePickUp}
                        onChange={breweryHandInputChange}
                    >
                        <option value="">Select </option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="delivery">Delivery: </label>
                    <select type="text" name="delivery" required autoFocus className="form-control"
                        placeholder=""
                        defaultValue={brewery.delivery}
                        onChange={breweryHandInputChange}
                    >
                        <option value="">Select </option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        placeholder=""
                        defaultValue={brewery.location}
                        onChange={breweryHandInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editBrewery()
                }}>
                Save Updates
        </button>
        </form>
    )
}

