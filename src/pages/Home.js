
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { ShowListsContext } from '@Context/ShowLists'
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
	const displayWidth = document.documentElement.clientWidth

	useEffect(() => {
		setShowLists(false)
	}, [])

	const currentDisplay = showLists ? <Lists /> : <Tasks />
	const smallDisplay = displayWidth < theme.globals.breakpoint ? true : false

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