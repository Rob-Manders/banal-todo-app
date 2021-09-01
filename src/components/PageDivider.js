
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'

const Divider = styled.span`
	background-color: ${props => props.theme.background};
	height: 100%auto;
	width: 0.25rem;
	border-radius: 110vw;
	margin: 0.5rem;
`

export default function PageDivider() {
	const { theme } = useContext(ThemeContext)

	return (
		<Divider theme={theme} />
	)
}