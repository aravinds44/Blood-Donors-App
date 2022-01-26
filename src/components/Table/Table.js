import React from 'react'
import Cell from './Cell'
import TableHeader from './TableHeader'
import './Table.css'
import DonorCard from '../DonorCard/DonorCard'
import { useState } from 'react/cjs/react.development'


function Table(props) {

    const [donorCard, setDonorCard] = useState(0);

    function showCard(details){
        setDonorCard(details)
    }

    function closeCard(){

        setDonorCard(false)
    }
    
    return (
        <div>
        <div className='donor-table'>
            <TableHeader/>
            <div className='tbl-content'>
        <table>
        <tbody>

        {props.donors.map((donor,index)=>{

           
               return(
                <Cell
                    name={donor.name}
                    blood={donor.blood}
                    phone={donor.phone}
                    place={donor.place}
                    email={donor.email}
                    key = {index}
                    id={index+1}
                    onView = {showCard}
                />)
            
        })}        
        </tbody>
        </table>
        </div>
        {donorCard && <DonorCard details={donorCard} onClose={closeCard} />}
        </div>
        </div>
    )
}

export default Table
