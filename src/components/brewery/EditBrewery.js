import React, { useState, useContext, useEffect } from "react"
import { BreweryContext } from "./BreweryProvider"
import { EditBreweryForm } from "./EditBrewery"

export const EditBrewery = () => {
    const { breweries, deleteBrewery } = useContext(BreweryContext)
}

// Toggle details modal
const [modal, setModal] = useState(false)
const toggle = () => setModal(!modal)

// Toggle edit modal
const [editModal, setEditModal] = useState(false)
const toggleEdit = () => setEditModal(!editModal)

const [selectedBrewery, setBrewery] = useState({
    brewery: {},
    location: null,
    customer: null
})
