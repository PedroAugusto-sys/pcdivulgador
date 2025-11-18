import { Link } from 'react-router-dom'
import { FaChartLine, FaUsers, FaTrophy, FaMusic } from 'react-icons/fa'
import profileImage from '../../assets/profile.jpg'
import Testimonials from './Testimonials'
import { useCountUp } from '../../hooks/useCountUp'
import styles from './Home.module.css'

// Função para converter valores como '50M+', '200+', '500K+' em números
const parseValue = (valueStr) => {
  const str = valueStr.replace(/[^0-9MK]/g, '')
  if (str.includes('M')) {
    return parseFloat(str.replace('M', '')) * 1000000
  } else if (str.includes('K')) {
    return parseFloat(str.replace('K', '')) * 1000
  } else {
    return parseFloat(str)
  }
}

// Função para formatar o número de volta para o formato original
const formatValue = (num, originalStr) => {
  if (originalStr.includes('M')) {
    return (num / 1000000).toFixed(0) + 'M+'
  } else if (originalStr.includes('K')) {
    return (num / 1000).toFixed(0) + 'K+'
  } else {
    return Math.floor(num) + '+'
  }
}

// Componente para cada card de métrica com animação de contagem
const MetricCard = ({ icon: Icon, value, label, index }) => {
  const endValue = parseValue(value)
  // Adiciona um delay baseado no index para criar efeito cascata
  const delay = index * 200 // 200ms de delay entre cada card
  const [count, countRef] = useCountUp(endValue, 2000, true, delay)
  const displayValue = formatValue(count, value)

  return (
    <div className={styles.metricCard} ref={countRef}>
      <div className={styles.metricIcon}>
        <Icon />
      </div>
      <div className={styles.metricValue}>{displayValue}</div>
      <div className={styles.metricLabel}>{label}</div>
    </div>
  )
}

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
              {metrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  icon={metric.icon}
                  value={metric.value}
                  label={metric.label}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}

export default Home

