
import React, { useContext } from 'react'
import styled from 'styled-components'
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
		max-width: 1400px;

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
	
		@media (min-width: 1000px) {
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

		@media (min-width: 1000px) {
			display: none;
		}
	}
`

export default function Nav() {
	const { theme } = useContext(ThemeContext)

	return (
		<NavBar theme={theme}>
			<div className="container">
				<Logo />
				<Options theme={theme}>
					<Icon_List aria-label="view lists" />
					<Icon_Options aria-label="options" />
					<ThemeToggle />
				</Options>
			</div>
		</NavBar>
	)
}