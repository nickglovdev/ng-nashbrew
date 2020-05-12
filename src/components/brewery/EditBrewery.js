// import React, { useState, useContext } from "react"
// import { BreweryContext } from "./BreweryProvider"
// import { EditBreweryForm } from "./EditBreweryForm"
// import {Brewery} from "./Brewery"
// import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"

// export const EditBrewery = () => {
//     const { breweries, deleteBrewery } = useContext(BreweryContext)

    
//     const [selectedBrewery, setBrewery] = useState({
//         brewery: {},
//     })

//     // Toggle details modal
//     const [modal, setModal] = useState(false)
//     const toggle = () => setModal(!modal)

//     // Toggle edit modal
//     const [editModal, setEditModal] = useState(false)
//     const toggleEdit = () => setEditModal(!editModal)

//     return (
//         <div className="searchResults">
//             <div className="brewerySearch">
//                 {
//                     breweries.map(brewery => <div
//                         className="fakeLink href"
                    
//                         onClick={() => {

//                             setBrewery({ brewery })
//                             toggle()
//                         }}
//                     >Edit</div>)
                    
//                 }
//             </div>
                
//             <Modal isOpen={editModal} toggle={toggleEdit}>
//                 <ModalHeader toggle={toggleEdit}>
//                     {selectedBrewery.brewery.name}
//                 </ModalHeader>
//                 <ModalBody>
//                     <EditBreweryForm key={selectedBrewery.brewery.id} toggleEdit={toggleEdit} {...selectedBrewery} />
//                 </ModalBody>
//             </Modal>

//             <Modal isOpen={modal} toggle={toggle}>
//                 <ModalHeader toggle={toggle}>
//                     {selectedBrewery.brewery.name}
//                 </ModalHeader>
//                 <ModalBody>
//                     <Brewery key={selectedBrewery.brewery.id} {...selectedBrewery} />
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="info" onClick={() => {
//                         toggle()
//                         toggleEdit()
//                     }}>Edit</Button>
//                     <Button color="danger" onClick={() => {
//                         deleteBrewery(selectedBrewery.brewery.id)
//                         toggle()
//                     }}>Delete</Button>
//                 </ModalFooter>
//             </Modal>
//         </div>
//     )
// }

