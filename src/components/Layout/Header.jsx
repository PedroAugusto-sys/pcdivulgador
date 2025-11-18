import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>PC Divulgador</span>
        </Link>
        
        <button 
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Início
          </Link>
          <Link 
            to="/sobre" 
            className={`${styles.navLink} ${isActive('/sobre') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Sobre
          </Link>
          <Link 
            to="/projetos" 
            className={`${styles.navLink} ${isActive('/projetos') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Projetos
          </Link>
          <Link 
            to="/contato" 
            className={`${styles.navLink} ${isActive('/contato') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

