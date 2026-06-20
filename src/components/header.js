import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/header.css'

function Header() {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setOpen(false)
    }, [location.pathname])

    return (
        <header className="site-header">
            <div className="header-inner">
                <Link to="/" className="logo">
                    <span className="logo-white">Pedro</span>
                    <span className="logo-accent">Dev</span>
                </Link>

                <nav className={`nav${open ? ' open' : ''}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">Sobre</Link></li>
                        <li><Link to="/projects">Projetos</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </nav>

                <button
                    className="menu-btn"
                    aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                    onClick={() => setOpen(v => !v)}
                >
                    <span className={`burger${open ? ' open' : ''}`} />
                </button>
            </div>

            <div
                className={`overlay${open ? ' visible' : ''}`}
                onClick={() => setOpen(false)}
            />
        </header>
    )
}

export default Header
