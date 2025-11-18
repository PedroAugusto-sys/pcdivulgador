import { 
  FaBullhorn, 
  FaMusic, 
  FaChartLine, 
  FaUsers, 
  FaCamera, 
  FaVideo,
  FaRocket,
  FaHandshake,
  FaLightbulb,
  FaNetworkWired
} from 'react-icons/fa'
import styles from './About.module.css'

const About = () => {
  const hardSkills = [
    { icon: FaBullhorn, name: 'Divulgação Artística', description: 'Estratégias de marketing e comunicação para artistas' },
    { icon: FaMusic, name: 'Produção Musical', description: 'Conhecimento profundo do mercado musical sertanejo' },
    { icon: FaChartLine, name: 'Análise de Dados', description: 'Métricas e KPIs para otimização de campanhas' },
    { icon: FaCamera, name: 'Produção Visual', description: 'Criação de conteúdo visual impactante' },
    { icon: FaVideo, name: 'Produção de Vídeo', description: 'Vídeos promocionais e documentários' },
    { icon: FaNetworkWired, name: 'Gestão de Redes Sociais', description: 'Estratégias para Instagram, TikTok, YouTube' }
  ]

  const softSkills = [
    { icon: FaRocket, name: 'Inovação', description: 'Sempre buscando novas formas de conectar artistas e público' },
    { icon: FaHandshake, name: 'Relacionamento', description: 'Construção de parcerias duradouras e confiáveis' },
    { icon: FaUsers, name: 'Trabalho em Equipe', description: 'Colaboração efetiva com artistas e produtores' },
    { icon: FaLightbulb, name: 'Criatividade', description: 'Soluções criativas para desafios únicos' }
  ]

  return (
    <section className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutHeader}>
          <h2 className={`${styles.sectionTitle} animate__animated animate__fadeInUp`}>
            Sobre Mim
          </h2>
          <div className={`${styles.introText} animate__animated animate__fadeInUp animate__delay-1s`}>
            <p>
              Com mais de uma década de experiência no mercado de música sertaneja, 
              dedico minha carreira a transformar talentos em sucessos. Minha trajetória 
              começou com a paixão pela música e pela comunicação, evoluindo para uma 
              expertise consolidada em divulgação artística.
            </p>
            <p>
              Acredito que cada artista tem uma história única para contar, e meu trabalho 
              é garantir que essa história seja ouvida, vista e sentida pelo público certo. 
              Através de estratégias personalizadas, combinando conhecimento técnico, 
              criatividade e relacionamento humano, construo pontes entre artistas e seus 
              públicos, gerando resultados mensuráveis e duradouros.
            </p>
            <p>
              Minha filosofia é baseada em confiança, transparência e comprometimento. 
              Cada projeto é tratado com a dedicação e seriedade que ele merece, sempre 
              com foco em resultados que superem expectativas e construam legados artísticos.
            </p>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3 className={`${styles.subsectionTitle} animate__animated animate__fadeInUp`}>
            Habilidades Técnicas
          </h3>
          <div className={styles.skillsGrid}>
            {hardSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div 
                  key={index}
                  className={`${styles.skillCard} animate__animated animate__fadeIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.skillIcon}>
                    <Icon />
                  </div>
                  <h4 className={styles.skillName}>{skill.name}</h4>
                  <p className={styles.skillDescription}>{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3 className={`${styles.subsectionTitle} animate__animated animate__fadeInUp`}>
            Competências Pessoais
          </h3>
          <div className={styles.skillsGrid}>
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div 
                  key={index}
                  className={`${styles.skillCard} animate__animated animate__fadeIn`}
                  style={{ animationDelay: `${(index + hardSkills.length) * 0.1}s` }}
                >
                  <div className={styles.skillIcon}>
                    <Icon />
                  </div>
                  <h4 className={styles.skillName}>{skill.name}</h4>
                  <p className={styles.skillDescription}>{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

