
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'

const ToggleSwitch = styled.div`
	cursor: pointer;
	background-color: ${props => props.theme.background};
	height: 3rem;
	width: 5.75rem;
	border-radius: 100vw;
	margin-left: 0.5rem;
`

export default function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<ToggleSwitch theme={theme} onClick={() => toggleTheme()}>

		</ToggleSwitch>
	)
}