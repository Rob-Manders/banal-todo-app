
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'

const TextLogo = styled.h1`
	font-family: 'Rock Salt', sans-serif;
	font-weight: 400;
	text-align: center;
	font-size: 2rem;
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

export default function Logo() {
	const { theme } = useContext(ThemeContext)

	return (
		<TextLogo theme={theme}>
			Banal
			<span>
				Todo
			</span>
		</TextLogo>
	)
}