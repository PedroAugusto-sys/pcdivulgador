import { useState, useEffect, useRef } from 'react'

/**
 * Hook para animar contagem crescente de números
 * @param {number} end - Valor final da contagem
 * @param {number} duration - Duração da animação em milissegundos
 * @param {boolean} startOnView - Se true, inicia a animação quando o elemento entra na viewport
 * @returns {[number, React.Ref]} - [valor atual, ref do elemento]
 */
export const useCountUp = (end, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(!startOnView)
  const elementRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    if (!startOnView || hasStarted) {
      // Inicia a animação imediatamente
      const startTime = Date.now()
      const startValue = 0

      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Função de easing (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentValue = Math.floor(startValue + (end - startValue) * easeOut)

        setCount(currentValue)

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }
  }, [end, duration, startOnView, hasStarted])

  useEffect(() => {
    if (!startOnView || hasStarted) return

    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [startOnView, hasStarted])

  return [count, elementRef]
}

