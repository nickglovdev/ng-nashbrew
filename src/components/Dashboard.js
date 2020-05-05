import React from "react"
import { BreweryProvider } from "./brewery/BreweryProvider"
import BreweryList from "./brewery/BreweryList"



export default () => (
    <>
        <h2>Welcome to NashBrew Your Brewery Catalog</h2>
        <h3>Remember Your best is Different Everyday, but Your Favorite Beer is the Same!</h3>

        <BreweryProvider>
         <BreweryList />
        </BreweryProvider>
    </>
    
)