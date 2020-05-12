import React, { useContext, useState } from "react"
import { BreweryContext } from "./BreweryProvider"



export const EditBreweryForm = ({brewery, toggleEdit}) => {
    const { updateBrewery } = useContext(BreweryContext)

    const [ updatedBrewery, setBrewery ] = useState(brewery)

    const breweryHandInputChange = (event) => {
        const newBrewery = Object.assign({}, updatedBrewery)

        newBrewery[event.target.name] = event.target.value

        setBrewery(newBrewery)
    }

   const editBrewery = () => {
    updateBrewery({
        id: updatedBrewery.id,
        breweryName: updatedBrewery.breweryName,
        hoursOfOperation: updatedBrewery.hoursOfOperation,
        curbSidePickUp: updatedBrewery.curbSidePickUp,
        delivery: updatedBrewery.delivery,
        location: updatedBrewery.location,
        userId: parseInt(localStorage.getItem("nashBrew_user"))
    })
        .then(toggleEdit)
        
   }
   return(
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
                    placeholder="Hours of Operation"
                    defaultValue={brewery.hoursOfOperation}
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

 