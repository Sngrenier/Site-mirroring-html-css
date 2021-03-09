import React, {useContext} from 'react'
import {AuthContext} from '../context/newAuthContext'

export default function Title({name, title}) {
    const values=useContext(AuthContext)
    console.log(values)
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">{name} <strong className="text-blue">{title}</strong></h1>
            </div>
        </div>
    )
}
