
import React, { useContext, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import { ThemeContext } from '@Context/Theme'
import ShowLists from '@Context/ShowLists'
import TodoLists from '@Context/TodoLists'
import useCreateID from '@Hooks/useCreateID'

import Nav from '@Components/Nav'

import Home from '@Pages/Home'

import List from '@Components/List'
import Lists from '@Components/Lists'
import Task from '@Components/Task'
import Tasks from '@Components/Tasks'

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
				<Home />
				{/* <Lists>
					<List listId={0} listName="List 1"/>
					<List listId={1} listName="List 2"/>
				</Lists> */}

				{/* <Tasks>
					<Task taskId={0} taskName="Do a thing" />
					<Task taskId={1} taskName="Another thing to do" />
				</Tasks> */}
			</ShowLists>
		</TodoLists>
	)
}