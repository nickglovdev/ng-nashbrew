import React, { useContext, useState } from "react"
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"
import { BeerContext } from "./BeerProvider"
import { EditBeerForm } from "./EditBeerForm"

export const Beer = ({ beer }) => {

    const { deleteBeer } = useContext(BeerContext)

    const [selectedBeer, setBeer] = useState({
        beer: {},
    })

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    return (
        <section className="beerData">
            <div className="beer-space">Name of Beer: {beer.beerName}</div>
            <div className="beer-space">Beers in a Pack: {beer.howManyBeers}</div>
            <div className="beer-space">Price: ${beer.price}</div>
            <div className="beer-space">Alcohol Content: {beer.alcoholContent}%</div>
            <div className="beerEdit">
                {
                    <div
                        className="fakeLink href"

                        onClick={() => {
                            setBeer({ beer })
                            toggle()
                        }}
                    >Edit</div>
                }
            </div>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {selectedBeer.beer.name}
                </ModalHeader>
                <ModalBody>
                    <EditBeerForm key={selectedBeer.beer.id} toggleEdit={toggleEdit} {...selectedBeer} />
                </ModalBody>
            </Modal>
                
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {selectedBeer.beer.name}
                </ModalHeader>
                <ModalBody>
                    <Beer key={selectedBeer.beer.id} {...selectedBeer} />
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={() => {
                        toggle()
                        toggleEdit()
                    }}>Edit</Button>
                    <Button color="danger" onClick={() => {
                        deleteBeer(selectedBeer.beer.id)
                        toggle()
                    }}>Delete</Button>
                </ModalFooter>
            </Modal>



        </section>
    )
}