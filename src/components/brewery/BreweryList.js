import React, { useContext, useState } from "react"
import { BreweryContext } from "./BreweryProvider"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"
import BreweryForm from "./BreweryForm"
import BeerForm from "../beer/BeerForm"
import { Brewery } from "./Brewery"
import "./Brewery.css"

const BreweryList = () => {
    const { breweries } = useContext(BreweryContext)


    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [modalBeer, setModalBeer] = useState(false)
    const toggleBeer = () => setModalBeer(!modalBeer)

    return (
        <>
            <h2>Breweries</h2>
            <Button className="brewButton" onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("nashBrew_user")
                if (userId) {
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>Add Brewery</Button>
            <Button className="beerButton" onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("nashBrew_user")
                if (userId) {
                    // If the user is authenticated, show the animal form
                    toggleBeer()
                }
            }}>New Beer</Button>
            <div className="breweries">
                {
                    breweries.map(brew => {
                        return <Brewery key={brew.id} brewery={brew} />
                    })
                }
            </div>

            {/* Add toggle for the modal for the New Beer */}
            <Modal isOpen={modalBeer} toggle={toggleBeer}>
                <ModalHeader toggle={toggleBeer}>
                    New Beer
                        </ModalHeader>
                <ModalBody>
                    <BeerForm toggles={toggleBeer} />
                </ModalBody>
            </Modal>

            {/* Add toggle to Modal for the Add Brewery Button */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Brewery
                </ModalHeader>
                <ModalBody>
                    <BreweryForm toggles={toggle} />
                </ModalBody>
            </Modal>
        </>
    )

}

export default BreweryList