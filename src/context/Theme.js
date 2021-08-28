
import React, { createContext, useState } from 'react'
import { darkTheme } from '@Source/themes/darkTheme'
import { lightTheme } from '@Source/themes/lightTheme'

export const ThemeContext = createContext()

export default function Theme({children}) {
	const [ theme, setTheme ] = useState(darkTheme)

	function toggleTheme() {
		console.log('Toggle theme.')
		setTheme(prevTheme => {
			return prevTheme === lightTheme ? darkTheme : lightTheme
		})
	}

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}