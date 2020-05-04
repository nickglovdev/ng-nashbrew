import React, { useContext, useState } from "react"
import { BreweryContext } from "./BreweryProvider"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import BreweryForm from "./BreweryForm"
import { Brewery } from "./Brewery"
import "./Brewery.css"

const BreweryList = () => {
    const { breweries } = useContext(BreweryContext)
    

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>breweries</h2>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("nashBrew_user")
                if(userId){
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>Make Brewery</Button>
            <div className="breweries">
            {
                breweries.map(brew => {
                    return <Brewery key={brew.id} brewery={brew} />
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