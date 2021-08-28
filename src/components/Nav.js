
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_List, Icon_Options } from '@Components/Icons'
import ThemeToggle from '@Components/ThemeToggle'

const NavBar = styled.nav`
	background-color: ${props => props.theme.foreground};
	min-height: 80px;
	width: 100%;
	
	.container {
		padding: 0.5rem;
		max-width: 1400px;

		svg {
			height: 1.875rem;
			width: 1.875rem;
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

const Logo = styled.h1`
	font-family: 'Rock Salt', sans-serif;
	font-weight: 400;
	text-align: center;
	color: ${props => props.theme.secondary};
	margin: 0;

	span {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 1.25rem;
		color: ${props => props.theme.primary};
		margin-left: 0.25rem;
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

	.fa-list-ul {
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
				<Logo theme={theme}>Banal<span>Todo</span></Logo>
				<Options theme={theme}>
					<Icon_List />
					<Icon_Options />
					<ThemeToggle />
				</Options>
			</div>
		</NavBar>
	)
}