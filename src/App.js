
import React, { useContext, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import { ThemeContext } from '@Context/Theme'
import CurrentList from '@Context/CurrentList'
import ShowLists from '@Context/ShowLists'
import TodoLists from '@Context/TodoLists'
import useCreateID from '@Hooks/useCreateID'

import Nav from '@Components/Nav'
import Home from '@Pages/Home'


export default function App() {
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		document.body.style.backgroundColor = theme.background
		// console.log(useCreateID())
	}, [theme])

	return(
		<TodoLists>
			<ShowLists>
				<Nav />
				<CurrentList>
					<Home />
				</CurrentList>
			</ShowLists>
		</TodoLists>
	)
}