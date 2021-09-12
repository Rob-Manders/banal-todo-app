
import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { ShowListsContext } from '@Context/ShowLists'
import { TodoListContext } from '@Context/TodoLists'
import { CurrentListContext } from '@Context/CurrentList'
import Lists from '@Components/Lists'
import PageDivider from '@Components/PageDivider'
import Tasks from '@Components/Tasks'

const HomeContainer = styled.div`
	max-width: ${props => props.theme.globals.maxPageWidth}px;
	height: 100%;
	margin: 0 auto;
`

const LargeDisplayContainer = styled.div`
	display: flex;
	height: 100%;
`

export default function Home() {
	const { theme } = useContext(ThemeContext)
	const { showLists } = useContext(ShowListsContext)
	const { lists } = useContext(TodoListContext)
	const { currentList } = useContext(CurrentListContext)
	const [ selectedList, setSelectedList ] = useState(lists[0])
	const [ smallDisplay, setSmallDisplay ] = useState()

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
				<LargeDisplayContainer>
					<Lists />
					<PageDivider />
					<Tasks />
				</LargeDisplayContainer>
			}
		</HomeContainer>
	)
}