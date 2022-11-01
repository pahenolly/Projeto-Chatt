import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)

    return(
        <div className='navbar'>
            <span className="logo">Hw Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.nome} </span>
                <button onClick={()=>signOut(auth)}>Sair</button>
            </div>
        </div>
    )
} 

export default Navbar