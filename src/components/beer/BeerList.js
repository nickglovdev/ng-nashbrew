import React, { useContext, useState } from "react"
import { BeerContext } from "./BeerProvider"
import { BreweryContext } from "../brewery/BreweryProvider"
import { Beer } from "./Beer"
import "./Beer.css"

const BeerList = () => {
    const { beers } = useContext(BeerContext)
    const { breweries } = useContext(BreweryContext)


    return (
        
            <div className="beers">
                {
                    beers.map(beer => {
                        const MatchingBrewery = breweries.find(b => b.id === beer.breweryId)
                        return <Beer key={beer.id} beer={beer} brewery={MatchingBrewery}
                             />
                    })
                }
            </div>
        
    )
}
 export default BeerList