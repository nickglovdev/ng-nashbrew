import React, {useState} from "react"
import { Beer } from "../beer/Beer"
import  BeerForm  from "../beer/BeerForm"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"

// When we use Animal component in AnimalList, React takes the keys passed
// to the Animal component and puts it into one object
export const Brewery = ({brewery, foundBeers}) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
    
    <section className="breweryData">
        <div>Brewery Name: {brewery.breweryName}</div>
        <div>Hours Of Operation: {brewery.hoursOfOperation}</div>
        <div>Curb Side Pick Up: {brewery.curbSidePickUp ? "Yes" : "No"}</div>
        <div>Delivery: {brewery.delivery ? "Yes" : "No"}</div>
        <div>Location: {brewery.location}</div>
        <div>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("nashBrew_user")
                if(userId){
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>New Beer</Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add Brewery
                </ModalHeader>
                <ModalBody>
                    <BeerForm toggles={toggle}/>
                </ModalBody>
            </Modal>

        </div>
        <div>{foundBeers.map(beer =>{
             return(
               <Beer beer={beer}/>
             )      
        })}
        </div>
        
    </section>
)}