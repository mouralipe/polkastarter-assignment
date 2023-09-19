export const motion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 80,
      delay: 0.3,
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
}
