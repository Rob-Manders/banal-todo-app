
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ShowListsContext } from '@Context/ShowLists'
import { ThemeContext } from '@Context/Theme'
import { Icon_List, Icon_Options } from '@Components/Icons'
import Logo from '@Components/Logo'
import ThemeToggle from '@Components/ThemeToggle'

const NavBar = styled.nav`
	background-color: ${props => props.theme.foreground};
	min-height: 80px;
	width: 100%;
	
	.container {
		padding: 0.5rem;
		max-width: ${props => props.theme.globals.maxPageWidth}px;

		.icon--list,
		.icon--options {
			cursor: pointer;
			height: 1.625rem;
			width: 1.625rem;

			&:hover,
			&:focus {
				color: ${props => props.theme.focus};
			}
		}
	
		@media (min-width: ${props => props.theme.globals.breakpoint}px) {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1rem;
			margin: 0 auto;
		}
	}
`

const Options = styled.div`
	display: flex;
	align-items: center;
	color: ${props => props.theme.primary};
	margin-top: 0.5rem;

	@media (min-width: 1000px) {
		margin-top: 0;
	}

	svg {
		height: 1.875rem;
		width: 1.875rem;
	}

	.icon--list {
		margin-right: auto;
		margin-left: 0.5rem;
		transition: color 150ms;

		@media (min-width: ${props => props.theme.globals.breakpoint}px) {
			display: none;
		}
	}

	.icon--options {
		transition: color 150ms;
	}
`

export default function Nav() {
	const { toggleShowLists } = useContext(ShowListsContext)
	const { theme } = useContext(ThemeContext)

	return (
		<NavBar theme={theme}>
			<div className="container">
				<Logo />
				<Options theme={theme}>
					<Icon_List aria-label="view lists" onClick={() => toggleShowLists()}/>
					<Icon_Options aria-label="options" />
					<ThemeToggle />
				</Options>
			</div>
		</NavBar>
	)
}