import { Link } from 'react-router-dom'
import { FaChartLine, FaUsers, FaTrophy, FaMusic } from 'react-icons/fa'
import profileImage from '../../assets/profile.jpg'
import Testimonials from './Testimonials'
import styles from './Home.module.css'

const Home = () => {
  const metrics = [
    { icon: FaChartLine, value: '50M+', label: 'Streams Totais' },
    { icon: FaUsers, value: '200+', label: 'Artistas Atendidos' },
    { icon: FaTrophy, value: '15+', label: 'Anos de Experiência' },
    { icon: FaMusic, value: '500K+', label: 'Visualizações Médias' }
  ]

  return (
    <>
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
              <p className={`${styles.subtitle} animate__animated animate__fadeInUp animate__delay-1s`}>
                Divulgador Artístico Sertanejo
              </p>
              <p className={`${styles.slogan} animate__animated animate__fadeInUp animate__delay-1s`}>
                Transformando Talentos Sertanejos em Sucessos que Ecoam Brasil Afora
              </p>
              <p className={`${styles.description} animate__animated animate__fadeInUp animate__delay-2s`}>
                Especialista em divulgação artística de música sertaneja, com anos de experiência 
                transformando projetos em histórias de sucesso. Resultados mensuráveis e estratégias 
                personalizadas para cada artista.
              </p>
              
              <div className={`${styles.ctaWrapper} animate__animated animate__fadeInUp animate__delay-3s`}>
                <Link to="/contato" className={styles.ctaButtonPrimary}>
                  Transforme Seu Projeto Agora
                </Link>
                <Link to="/projetos" className={styles.ctaButtonSecondary}>
                  Ver Cases de Sucesso
                </Link>
              </div>
            </div>
          </div>

          <div className={`${styles.metricsSection} animate__animated animate__fadeInUp animate__delay-4s`}>
            <div className={styles.metricsGrid}>
              {metrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <div key={index} className={styles.metricCard}>
                    <div className={styles.metricIcon}>
                      <Icon />
                    </div>
                    <div className={styles.metricValue}>{metric.value}</div>
                    <div className={styles.metricLabel}>{metric.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}

export default Home

