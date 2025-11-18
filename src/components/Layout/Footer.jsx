import { Link } from 'react-router-dom'
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>PC Divulgador</h3>
            <p className={styles.footerText}>
              Transformando talentos sertanejos em sucessos que ecoam Brasil afora.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Navegação</h4>
            <nav className={styles.footerNav}>
              <Link to="/" className={styles.footerLink}>Início</Link>
              <Link to="/sobre" className={styles.footerLink}>Sobre</Link>
              <Link to="/projetos" className={styles.footerLink}>Projetos</Link>
              <Link to="/contato" className={styles.footerLink}>Contato</Link>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Contato</h4>
            <div className={styles.socialLinks}>
              <a 
                href="mailto:pcdivulgador2010@gmail.com" 
                className={styles.socialLink}
                aria-label="Email"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
              <a 
                href="https://wa.me/5562981343471" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com/pc_divulgador" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FaInstagram />
                <span>@pc_divulgador</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Paulo Cesar Junior. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

