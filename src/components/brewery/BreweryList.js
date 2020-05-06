import React, { useContext, useState } from "react"
import { BreweryContext } from "./BreweryProvider"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import BreweryForm from "./BreweryForm"
import { Brewery } from "./Brewery"
import "./Brewery.css"
import { BeerContext } from "../beer/BeerProvider"

const BreweryList = () => {
    const { breweries } = useContext(BreweryContext)
    const { beers } = useContext(BeerContext)
    

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Breweries</h2>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("nashBrew_user")
                if(userId){
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>Add Brewery</Button>
            <div className="breweries">
            {
                breweries.map(brew => {
                    const foundBeers = beers.filter(b => b.breweryId === brew.id)
                    return <Brewery key={brew.id} brewery={brew} foundBeers={foundBeers} />
                })
             }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Brewery
                </ModalHeader>
                <ModalBody>
                    <BreweryForm toggles={toggle}/>
                </ModalBody>
            </Modal>
        </>
    )
}
 export default BreweryList