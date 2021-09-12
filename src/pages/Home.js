
import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { ShowListsContext } from '@Context/ShowLists'
import { TodoListContext } from '@Context/TodoLists'
import Lists from '@Components/Lists'
import PageDivider from '@Components/PageDivider'
import Tasks from '@Components/Tasks'

const HomeContainer = styled.div`
	max-width: ${props => props.theme.globals.maxPageWidth};
	height: 100%;

	@media (min-width: ${props => props.theme.globals.breakpoint}) {
		display: flex;
		align-items: flex-start;
	}
`

export default function Home() {
	const { theme } = useContext(ThemeContext)
	const { showLists, setShowLists } = useContext(ShowListsContext)
	const { todoLists } = useContext(TodoListContext)
	const [ selectedList, setSelectedList ] = useState(todoLists[0])
	const [ smallDisplay, setSmallDisplay ] = useState()
	// const displayWidth = document.documentElement.clientWidth

	useEffect(() => {
		// setShowLists(false)

		function checkDisplay() {
			if (displayWidth < theme.globals.breakpoint)	setSmallDisplay(true)
			else setSmallDisplay(false)
		}
		
		let displayWidth = document.documentElement.clientWidth

		window.addEventListener('resize', () => {
			displayWidth = document.documentElement.clientWidth
			checkDisplay()
		})

		checkDisplay()

		return () => window.removeEventListener('resize')
	}, [])

	const currentDisplay = showLists ? <Lists /> : <Tasks selectedListId={selectedList.listId} />
	
	return (
		<HomeContainer theme={theme}>
			{
				smallDisplay
				?
				currentDisplay
				:
				<>
					<Lists />
					<PageDivider />
					<Tasks />
				</>
			}
		</HomeContainer>
	)
}