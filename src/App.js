
import React, { useContext, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import { ThemeContext } from '@Context/Theme'

import Nav from '@Components/Nav'

export default function App() {
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		document.body.style.backgroundColor = theme.background
	}, [theme])

	return(
		<>
			<Nav>
				<h1>Banal Todo App</h1>
			</Nav>
		</>
	)
}