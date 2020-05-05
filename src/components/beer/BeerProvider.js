import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BeerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BeerProvider = (props) => {
    // beers = data
    // setBeers = function that React created, so we can use it to set state of beers
    const [beers, setBeers] = useState([])

    const getBeers = () => {
        return fetch("http://localhost:8088/beers")
            .then(res => res.json())
            .then(setBeers)
    }

    const addBeer = beer => {
        return fetch("http://localhost:8088/beers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(beer)
        })
            .then(getBeers)
    }

    const deleteBeer = beerId => {
        return fetch(`http://localhost:8088/beers/${beerId}`, {
            method: "DELETE"
        })
            .then(getBeers)
    }

    const updateBeer = beer => {
        return fetch(`http://localhost:8088/beers/${beer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(beer)
        })
            .then(getBeers)
    }

    /*
        Load all beers when the component is initialized. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBeers()
    }, [])

   
    return (
        <BeerContext.Provider value={
            {
                beers,
                addBeer,
                deleteBeer,
                updateBeer
            }
        }>
            {props.children}
        </BeerContext.Provider>
    )
}