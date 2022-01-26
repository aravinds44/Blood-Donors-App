import React from 'react'

function TableHeader() {
    return (
        <div className='tbl-header'>
        <table >
            <thead>
                <tr>
                    <th className='col-sno'>Sno.</th>
                    <th>Name</th>
                    <th>Blood</th>
                    <th></th>
                </tr>
            </thead>
        </table>
            
        </div>
    )
}

export default TableHeader
