import { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaInstagram, FaPaperPlane } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Simular envio (substituir por integração real com API/Email)
    try {
      // Aqui você pode integrar com um serviço de email como EmailJS, Formspree, etc.
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
      
      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.contact}>
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactHeader}>
          <h2 className={`${styles.sectionTitle} animate__animated animate__fadeInUp`}>
            Entre em Contato
          </h2>
          <p className={`${styles.ctaText} animate__animated animate__fadeInUp animate__delay-1s`}>
            Pronto para transformar seu próximo projeto em sucesso?
          </p>
          <p className={`${styles.sectionSubtitle} animate__animated animate__fadeInUp animate__delay-2s`}>
            Estou aqui para ajudar a transformar sua ideia em realidade. Entre em contato através 
            das redes sociais abaixo ou preencha o formulário.
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactMethods}>
            <h3 className={`${styles.methodsTitle} animate__animated animate__fadeInUp`}>
              Outras Formas de Contato
            </h3>
            <div className={styles.methodsGrid}>
              <a 
                href="mailto:pcdivulgador2010@gmail.com"
                className={`${styles.methodCard} animate__animated animate__fadeIn`}
              >
                <div className={styles.methodIcon}>
                  <FaEnvelope />
                </div>
                <h4 className={styles.methodName}>Email</h4>
                <p className={styles.methodValue}>pcdivulgador2010@gmail.com</p>
              </a>

              <a 
                href="https://wa.me/5562981343471"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.methodCard} animate__animated animate__fadeIn animate__delay-1s`}
              >
                <div className={styles.methodIcon}>
                  <FaWhatsapp />
                </div>
                <h4 className={styles.methodName}>WhatsApp</h4>
                <p className={styles.methodValue}>(62) 98134-3471</p>
              </a>

              <a 
                href="https://instagram.com/pc_divulgador"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.methodCard} animate__animated animate__fadeIn animate__delay-2s`}
              >
                <div className={styles.methodIcon}>
                  <FaInstagram />
                </div>
                <h4 className={styles.methodName}>Instagram</h4>
                <p className={styles.methodValue}>@pc_divulgador</p>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                placeholder="Seu nome completo"
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="seu@email.com"
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                placeholder="Conte-me sobre seu projeto..."
                rows="6"
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            {submitStatus === 'success' && (
              <div className={`${styles.successMessage} animate__animated animate__fadeIn`}>
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={`${styles.errorMessage} animate__animated animate__fadeIn`}>
                Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
              </div>
            )}

            <button
              type="submit"
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  <FaPaperPlane /> Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

