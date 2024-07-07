'use client'

import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const {setTheme, resolvedTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return <div>ThemeSwitcher</div>
}
