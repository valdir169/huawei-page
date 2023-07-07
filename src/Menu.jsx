import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../public/image/huawei_logo.png'
import './menu.css'
import { useState } from 'react'

export function Menu() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <div className="menu-logo">
                <a href="#">
                    <img className='menu-logo-icon' src={logo} alt="Huawei logo" />
                </a>
            </div>

            <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                <a href="">Inicio</a>
                <a href="">ServIcios</a>
                <a href="">Nosotros</a>
                <a href="">Contactos</a>
            </div>

            <div className='menu-icon' >
                <FontAwesomeIcon icon={faSearch } className='bar-icon'/>
                <FontAwesomeIcon icon={faUser} className='bar-icon'/>
                <FontAwesomeIcon onClick={toggleMenu} icon={isOpen ? faTimes : faBars} className='bar-icon'/>
            </div>
        </nav>
    )
}   