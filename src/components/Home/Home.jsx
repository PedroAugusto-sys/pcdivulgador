import { Link } from 'react-router-dom'
import profileImage from '../../assets/profile.jpg'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={`container ${styles.homeContainer}`}>
        <div className={styles.homeContent}>
          <div className={`${styles.imageWrapper} animate__animated animate__fadeIn`}>
            <img 
              src={profileImage} 
              alt="Paulo Cesar Junior - Divulgador Artístico Sertanejo" 
              className={styles.profileImage}
            />
          </div>
          
          <div className={styles.textContent}>
            <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
              Paulo Cesar Junior
            </h1>
            <p className={`${styles.slogan} animate__animated animate__fadeInUp animate__delay-1s`}>
              Transformando Talentos Sertanejos em Sucessos que Ecoam Brasil Afora
            </p>
            <p className={`${styles.description} animate__animated animate__fadeInUp animate__delay-2s`}>
              Especialista em divulgação artística de música sertaneja, com anos de experiência 
              transformando projetos em histórias de sucesso. Sua confiança é nossa prioridade.
            </p>
            <div className={`${styles.ctaWrapper} animate__animated animate__fadeInUp animate__delay-3s`}>
              <Link to="/projetos" className={`${styles.ctaButton} animate__animated`}>
                Ver Projetos
              </Link>
              <Link to="/contato" className={styles.ctaButtonSecondary}>
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

