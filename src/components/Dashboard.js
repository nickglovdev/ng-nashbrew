import React from "react"
import { BreweryProvider } from "./brewery/BreweryProvider"
import BreweryList from "./brewery/BreweryList"
import { BeerProvider } from "./beer/BeerProvider"
import { BeerTypeProvider } from "./beerType/BeerTypeProvider"




export default () => (
    <>
        <h2>Welcome to NashBrew Your Brewery Catalog</h2>
        <h3>Remember Your best is Different Everyday, but Your Favorite Beer is the Same!</h3>

        <BeerProvider>
            <BeerTypeProvider>
                <BreweryProvider>
                    <BreweryList />
                </BreweryProvider>
            </BeerTypeProvider>
        </BeerProvider>
    </>
    
)