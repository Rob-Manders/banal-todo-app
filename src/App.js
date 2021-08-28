
import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import Theme from '@Context/Theme'

import Nav from '@Components/Nav'

export default function App() {
	return(
		<Theme>
			<Nav>
				<h1>Banal Todo App</h1>
			</Nav>
		</Theme>
	)
}