import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={`container ${styles.projectsContainer}`}>
        <div className={styles.projectsHeader}>
          <h2 className={`${styles.sectionTitle} animate__animated animate__fadeInUp`}>
            Meus Projetos
          </h2>
          <p className={`${styles.sectionSubtitle} animate__animated animate__fadeInUp animate__delay-1s`}>
            Cada projeto é uma história de sucesso, construída com dedicação, estratégia e paixão pela música sertaneja.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
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
                  <span className={styles.viewMore}>Ver Detalhes</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

