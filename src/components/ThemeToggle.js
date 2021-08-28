
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { lightTheme } from '@Source/themes/lightTheme'
import { Icon_Moon, Icon_Sun } from '@Components/Icons'

const ToggleSwitch = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	background-color: ${props => props.theme.background};
	height: 3rem;
	width: 5.75rem;
	border-radius: 100vw;
	margin-left: 0.5rem;
	padding: 0.35rem;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${props => props.theme.primary};
		border-radius: 50%;
		height: 2.25rem;
		width: 2.25rem;
		transition: color 150ms;

		svg {
			height: 1.25rem;
			width: 1.25rem;
		}
	}

	&:hover,
	&:focus {
		div {
			color: ${props => props.theme.focus}
		}
	}
`

const Light = styled.div`
	background-color: ${props => props.theme.themeName === 'light' ? props.theme.foreground : props.theme.background};
`

const Dark = styled.div`
	background-color: ${props => props.theme.themeName === 'dark' ? props.theme.foreground : props.theme.background};
`

export default function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<ToggleSwitch theme={theme} onClick={() => toggleTheme()}>
			<Dark theme={theme}>
				<Icon_Moon />
			</Dark>
			<Light theme={theme}>
				<Icon_Sun />
			</Light>
		</ToggleSwitch>
	)
}