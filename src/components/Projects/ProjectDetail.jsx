import { useParams, Link, useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import styles from './ProjectDetail.module.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <section className={styles.projectDetail}>
        <div className={`container ${styles.container}`}>
          <div className={styles.notFound}>
            <h2>Projeto não encontrado</h2>
            <Link to="/projetos" className={styles.backButton}>
              Voltar para Projetos
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.projectDetail}>
      <div className={`container ${styles.container}`}>
        <button 
          onClick={() => navigate('/projetos')}
          className={`${styles.backButton} animate__animated animate__fadeIn`}
        >
          <FaArrowLeft /> Voltar para Projetos
        </button>

        <div className={styles.projectHeader}>
          <span className={`${styles.category} animate__animated animate__fadeIn`}>
            {project.category}
          </span>
          <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
            {project.title}
          </h1>
          <p className={`${styles.description} animate__animated animate__fadeInUp animate__delay-1s`}>
            {project.description}
          </p>
        </div>

        <div className={styles.projectImage}>
          <img 
            src={project.image} 
            alt={project.title}
            className="animate__animated animate__fadeIn"
          />
        </div>

        <div className={styles.projectContent}>
          <div className={styles.contentSection}>
            <h2 className={`${styles.sectionTitle} animate__animated animate__fadeInUp`}>
              O Desafio
            </h2>
            <p className="animate__animated animate__fadeInUp animate__delay-1s">
              {project.challenge}
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={`${styles.sectionTitle} animate__animated animate__fadeInUp`}>
              A Solução
            </h2>
            <p className="animate__animated animate__fadeInUp animate__delay-1s">
              {project.solution}
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={`${styles.sectionTitle} animate__animated animate__fadeInUp`}>
              Resultados
            </h2>
            <div className={`${styles.results} animate__animated animate__fadeInUp animate__delay-1s`}>
              <div className={styles.resultItem}>
                <FaCheckCircle className={styles.resultIcon} />
                <p>{project.results}</p>
              </div>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className={styles.gallerySection}>
              <h2 className={`${styles.sectionTitle} animate__animated animate__fadeInUp`}>
                Galeria
              </h2>
              <div className={styles.gallery}>
                {project.gallery.map((image, index) => (
                  <div 
                    key={index}
                    className={`${styles.galleryItem} animate__animated animate__fadeIn`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img src={image} alt={`${project.title} - Imagem ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.projectFooter}>
          <Link to="/contato" className={styles.ctaButton}>
            Quer um projeto como este? Entre em contato
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail

