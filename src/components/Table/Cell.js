import React from 'react'

function Cell(props) {
    const details = {
        name:props.name,
        blood:props.blood,
        place:props.place,
        email:props.email,
        phone:props.phone        
    }
    return (
        <tr>
            <td className='col-sno'>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.blood}</td>
            <td><button className='expand-btn' onClick={()=>props.onView(details)} >view details</button></td>
        </tr>
    )
}

export default Cell
