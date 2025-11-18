import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Artista Sertanejo A',
      role: 'Cantor e Compositor',
      content: 'Paulo transformou completamente minha carreira. Em apenas 6 meses, minhas músicas alcançaram mais de 2 milhões de streams. Profissionalismo e resultados excepcionais!',
      rating: 5,
      project: 'Lançamento de Álbum Completo'
    },
    {
      id: 2,
      name: 'Dupla Sertaneja B',
      role: 'Dupla Musical',
      content: 'Trabalhar com Paulo foi a melhor decisão que tomamos. Sua estratégia de divulgação nos levou a tocar em festivais nacionais e aumentar nossa base de fãs em 300%.',
      rating: 5,
      project: 'Estratégia de Rebranding'
    },
    {
      id: 3,
      name: 'Produtora Musical C',
      role: 'Gravadora Independente',
      content: 'Paulo entende profundamente o mercado sertanejo. Seus resultados falam por si só: todos os projetos que desenvolvemos juntos superaram as expectativas.',
      rating: 5,
      project: 'Múltiplos Lançamentos'
    }
  ]

  return (
    <section className={styles.testimonials}>
      <div className={`container ${styles.testimonialsContainer}`}>
        <div className={styles.testimonialsHeader}>
          <h2 className={`${styles.sectionTitle} animate__animated animate__fadeInUp`}>
            O Que Dizem Nossos Clientes
          </h2>
          <p className={`${styles.sectionSubtitle} animate__animated animate__fadeInUp animate__delay-1s`}>
            Resultados reais de artistas e produtoras que confiaram em nosso trabalho
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`${styles.testimonialCard} animate__animated animate__fadeIn`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className={styles.star} />
                ))}
              </div>
              <p className={styles.testimonialContent}>{testimonial.content}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
                <p className={styles.projectTag}>{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

