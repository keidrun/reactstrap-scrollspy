// @flow
import { useState, useEffect } from 'react'

const useResize = () => {
  const [height, setHeight] = useState<string>('vh-100')
  const [width, setWidth] = useState<string>('w-75')

  const resize = () => {
    if (document.documentElement) {
      const { clientWidth } = document.documentElement
      if (clientWidth <= 767) {
        setHeight('h-100')
        setWidth('w-100')
      } else {
        setHeight('vh-100')
        setWidth('w-75')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return {
    height,
    width,
  }
}

export default useResize
