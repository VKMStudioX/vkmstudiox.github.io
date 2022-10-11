export const useWindowWidth = () => {
  const windowWidth = ref(1920)
  const xs = ref(576)
  const sm = ref(576)
  const md = ref(768)
  const lg = ref(992)
  const xl = ref(1200)

  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()
    }
  })

  return {
    windowWidth,
    xs,
    sm,
    md,
    lg,
    xl,
  }
}

export const useWindowScrollY = () => {
  const scrollY = ref<number|string>(0)

  const handleScrollY = () => {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        handleScrollY()
      })
    }
  })

  return {
    scrollY,
  }
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
