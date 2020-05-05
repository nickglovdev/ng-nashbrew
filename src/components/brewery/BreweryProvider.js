import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BreweryContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BreweryProvider = (props) => {
    // breweries = data
    // setBreweries = function that React created, so we can use it to set state of breweries
    const [breweries, setBreweries] = useState([])

    const getBreweries = () => {
        return fetch("http://localhost:8088/breweries")
            .then(res => res.json())
            .then(setBreweries)
    }

    const addBrewery = brewery => {
        return fetch("http://localhost:8088/breweries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewery)
        })
            .then(getBreweries)
    }

    const deleteBrewery = breweryId => {
        return fetch(`http://localhost:8088/breweries/${breweryId}`, {
            method: "DELETE"
        })
            .then(getBreweries)
    }

    const updateBrewery = brewery => {
        return fetch(`http://localhost:8088/breweries/${brewery.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(brewery)
        })
            .then(getBreweries)
    }

    /*
        Load all breweries when the component is initialized. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBreweries()
    }, [])

   
    return (
        <BreweryContext.Provider value={
            {
                breweries,
                addBrewery,
                deleteBrewery,
                updateBrewery
            }
        }>
            {props.children}
        </BreweryContext.Provider>
    )
}