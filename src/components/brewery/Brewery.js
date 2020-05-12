import React, { useContext, useState } from "react"
import { Beer } from "../beer/Beer"
import { BreweryContext } from "./BreweryProvider"
import BeerForm from "../beer/BeerForm"
import { EditBreweryForm } from "./EditBreweryForm"
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"
import { BeerContext } from "../beer/BeerProvider"

// When we use Animal component in AnimalList, React takes the keys passed
// to the Animal component and puts it into one object
export const Brewery = ({ brewery }) => {

    const { deleteBrewery, updateBrewery, breweries } = useContext(BreweryContext)
    const { beers } = useContext(BeerContext)

    const [selectedBrewery, setBrewery] = useState({
        brewery: {},
    })

    const foundBeers = beers.filter(b => b.breweryId === brewery.id)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    return (

        <section className="breweryData">
            <div>Brewery Name: {brewery.breweryName}</div>
            <div>Hours Of Operation: {brewery.hoursOfOperation}</div>
            <div>Curb Side Pick Up: {brewery.curbSidePickUp ? "Yes" : "No"}</div>
            <div>Delivery: {brewery.delivery ? "Yes" : "No"}</div>
            <div>Location: {brewery.location}</div>
            <div className="searchResults">
                <div className="brewerySearch">
                    {
                        <div
                            className="fakeLink href"

                            onClick={() => {
                                setBrewery({ brewery })
                               toggleEdit()
                            }} 
                        >Edit</div>
                    }
                </div>


                <div>
                    <Button className="beerButton" onClick={() => {
                        // check if the user is authenticated
                        const userId = localStorage.getItem("nashBrew_user")
                        if (userId) {
                            // If the user is authenticated, show the animal form
                            toggle()
                        }
                    }}>New Beer</Button>

                    <div className="beerList">
                        <div>{foundBeers.map(beer => {
                            return (
                                <Beer beer={beer} />
                            )
                        })}
                        </div>
                    </div>


                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                            Add Beer
                        </ModalHeader>
                        <ModalBody>
                            <BeerForm toggles={toggle} />
                        </ModalBody>
                    </Modal>
                </div>
    
            </div>

        </section>

    )
}