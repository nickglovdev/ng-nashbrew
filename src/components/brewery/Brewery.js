import React, { useContext, useState } from "react"
import { Beer } from "../beer/Beer"
import { BreweryContext } from "./BreweryProvider"
import { EditBreweryForm } from "./EditBreweryForm"
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"
import { BeerContext } from "../beer/BeerProvider"


export const Brewery = ({ brewery }) => {

    const { deleteBrewery } = useContext(BreweryContext)
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

            <div className="breweryEdit">
                {
                    <div
                        className="fakeLink href"

                        onClick={() => {
                            setBrewery({ brewery })
                            toggleEdit()
                        }}
                    >Edit Brewery</div>
                }
            </div>
        
            {foundBeers.map(beer => {
                return (
                    <Beer beer={beer} />
                )
            })}


            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    Edit Brewery
                    </ModalHeader>
                <ModalBody>
                    <EditBreweryForm key={selectedBrewery.brewery.id} toggleEdit={toggleEdit} {...selectedBrewery} />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => {
                        deleteBrewery(selectedBrewery.brewery.id)
                        toggle()
                    }}>Delete</Button>
                </ModalFooter>
            </Modal>
        </section >
        

    )
}