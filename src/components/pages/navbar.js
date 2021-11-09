import React from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'

function navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    <MdFingerprint className="navbar-icon" />
                    LAVISH
                </Link>
                <div className="menu-icon">
                {click ? <FaTimes /> : <FaBars />}
                </div>
            </div> 
        </div>
    )
}

export default navbar
