import React, { useContext, useState } from "react"
import { BeerContext } from "./BeerProvider"
import { BreweryContext } from "../brewery/BreweryProvider"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import BeerForm from "./BeerForm"
import { Beer } from "./Beer"
import "./Beer.css"

const BeerList = () => {
    const { beers } = useContext(BeerContext)
    const { breweries } = useContext(BreweryContext)
   

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)


    return (
        <>
            <h2>Beers</h2>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("nashBrew_user")
                if(userId){
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>New Beer</Button>
            <div className="beers">
                {
                    
                    beers.map(beer => {
                        const MatchingBrewery = breweries.find(b => b.id === beer.breweryId)
                        debugger
                        return <Beer key={beer.id} beer={beer} brewery={MatchingBrewery}
                             />
                    })
                }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Beer
                </ModalHeader>
                <ModalBody>
                    <BeerForm toggles={toggle}/>
                </ModalBody>
            </Modal>
        </>
    )
}
 export default BeerList