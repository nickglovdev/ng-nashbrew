import React, { useContext, useState } from "react"
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"
import { BeerContext } from "./BeerProvider"
import { EditBeerForm } from "./EditBeerForm"
import "./Beer.css"

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
            <div className="beer__space"><span className="beer__title">Name of Beer: </span>{beer.beerName}</div>
            <div className="beer__space"><span className="beer__title">Beers in a Pack: </span>{beer.howManyBeers}</div>
            <div className="beer__space"><span className="beer__title">Price: $ </span>{beer.price}</div>
            <div className="beer__space"><span className="beer__title">Alcohol Content: </span>{beer.alcoholContent}%</div>
            
            <div>
                
                <div className="beerEdit">
                    {
                        <div
                            className="fakeLink href"

                            onClick={() => {
                                setBeer({ beer })
                                toggleEdit()
                            }}
                        >Edit Beer</div>
                    }
                </div>
            </div>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    Edit Beer
                </ModalHeader>
                <ModalBody>
                    <EditBeerForm key={selectedBeer.beer.id} toggleEdit={toggleEdit} {...selectedBeer} />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => {
                        deleteBeer(selectedBeer.beer.id)
                        toggle()
                    }}>Delete</Button>
                </ModalFooter>
            </Modal>
                

        </section>
    )
}