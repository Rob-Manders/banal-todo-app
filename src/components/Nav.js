
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_List, Icon_Options } from '@Components/Icons'
import ThemeToggle from '@Components/ThemeToggle'

const NavBar = styled.nav`
	background-color: ${props => props.theme.foreground};
	min-height: 80px;
	width: 100%;
	padding: 0.5rem;

	svg {
		height: 1.875rem;
		width: 1.875rem;
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

	svg {
		height: 1.875rem;
		width: 1.875rem;
	}

	.fa-list-ul {
		margin-right: auto;
		margin-left: 0.5rem;
	}
`

export default function Nav() {
	const { theme } = useContext(ThemeContext)

	return (
		<NavBar theme={theme}>
			<Logo theme={theme}>Banal<span>Todo</span></Logo>
			<Options theme={theme}>
				<Icon_List />
				<Icon_Options />
				<ThemeToggle />
			</Options>
		</NavBar>
	)
}