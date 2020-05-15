import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BeerTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const BeerTypeProvider = (props) => {
    const [beerTypes, setBeerTypes] = useState([])

    const getBeerTypes = () => {
        return fetch("http://localhost:8088/beerTypes")
            .then(res => res.json())
            .then(setBeerTypes)
    }


    useEffect(() => {
        getBeerTypes()
    }, [])

    return (
        <BeerTypeContext.Provider value={{
            beerTypes
        }}>
            {props.children}
        </BeerTypeContext.Provider>
    )
}