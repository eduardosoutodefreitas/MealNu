'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            {theme === "dark" ? (
                <button onClick={() => setTheme("light")}>
                    <MdLightMode size={20} />
                </button>
            ) : (
                <button onClick={() => setTheme("dark")}>
                    <MdDarkMode size={20} />
                </button>
            )}
        </>
    )
}
export default ThemeSwitcher