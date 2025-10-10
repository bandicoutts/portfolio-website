import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

export const defaultTransition = {
  duration: 0.5
}

export const staggerTransition = (index: number, delay: number = 0.1) => ({
  duration: 0.5,
  delay: index * delay
})

export const viewportOnce = {
  once: true
}
