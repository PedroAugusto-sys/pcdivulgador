import { Link } from 'react-router-dom'
import { FaEye, FaUsers, FaChartLine, FaArrowRight } from 'react-icons/fa'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

const Projects = () => {
  const extractMetrics = (results) => {
    const metrics = []
    if (!results) return metrics
    
    // Extrair números e métricas do texto de resultados
    const viewsMatch = results.match(/(\d+[KMB]?\+?)\s*(visualizações|views|streams)/i)
    const followersMatch = results.match(/(\d+[KMB]?\+?)\s*(seguidores|followers|novos seguidores)/i)
    const reachMatch = results.match(/(\d+[KMB]?\+?)\s*(alcance|reach)/i)
    const increaseMatch = results.match(/(\d+%)\s*(aumento|increase|growth)/i)
    
    if (viewsMatch) metrics.push({ icon: FaEye, value: viewsMatch[1], label: 'Visualizações' })
    if (followersMatch) metrics.push({ icon: FaUsers, value: followersMatch[1], label: 'Seguidores' })
    if (reachMatch) metrics.push({ icon: FaChartLine, value: reachMatch[1], label: 'Alcance' })
    if (increaseMatch) metrics.push({ icon: FaChartLine, value: increaseMatch[1], label: 'Aumento' })
    
    return metrics.slice(0, 3) // Máximo de 3 métricas por card
  }

  return (
    <section className={styles.projects}>
      <div className={`container ${styles.projectsContainer}`}>
        <div className={styles.projectsHeader}>
          <h2 className={`${styles.sectionTitle} animate__animated animate__fadeInUp`}>
            Cases de Sucesso
          </h2>
          <p className={`${styles.sectionSubtitle} animate__animated animate__fadeInUp animate__delay-1s`}>
            Cada projeto é uma história de sucesso, construída com dedicação, estratégia e paixão pela música sertaneja. 
            Resultados mensuráveis que transformam carreiras.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => {
            const metrics = extractMetrics(project.results)
            return (
              <Link
                key={project.id}
                to={`/projetos/${project.id}`}
                className={`${styles.projectCard} animate__animated animate__fadeIn`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.projectImageWrapper}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.projectOverlay}>
                    <span className={styles.viewMore}>
                      Ver Detalhes <FaArrowRight />
                    </span>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  {metrics.length > 0 && (
                    <div className={styles.projectMetrics}>
                      {metrics.map((metric, idx) => {
                        const Icon = metric.icon
                        return (
                          <div key={idx} className={styles.metricItem}>
                            <Icon className={styles.metricIcon} />
                            <div className={styles.metricContent}>
                              <span className={styles.metricValue}>{metric.value}</span>
                              <span className={styles.metricLabel}>{metric.label}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects

