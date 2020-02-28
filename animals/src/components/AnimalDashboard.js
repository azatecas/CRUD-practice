import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

export default function AnimalDashboard() {    
    const [ animals, setAnimals ] = useState([]);
    const [ dependancy, setDependency ] = useState(false);
    
    // How can get fetch the data from the server when the component mounts?
    // How can we capture and set that data to state?

    useEffect(() => {
        axiosWithAuth()
            .get('animals')
            .then(res => {
                console.log('res fetching animals', res.data);
                setAnimals(res.data)
            })
            .catch(err => console.log('error fetching animals', err));
            setDependency(false);
    }, [dependancy]);
    return(
        <div className="dash">
            <AnimalForm animals={animals} updateAnimals={setAnimals} setDependency={setDependency} />
            <AnimalList animals={animals} />
        </div>
    )
}