import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../public/image/huawei_logo.png'
import './menu.css'
import { useState } from 'react'

export function Menu() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="menu">
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

            <div className='menu-icon' onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='bar-icon'/>
            </div>
        </nav>
    )
}