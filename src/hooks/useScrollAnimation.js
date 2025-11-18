import { useEffect, useRef } from 'react'

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null)
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'fade-in-up',
    delay = 0
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in')
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, delay])

  return elementRef
}

