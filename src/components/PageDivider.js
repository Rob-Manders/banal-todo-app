
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'

const Divider = styled.div`
	background-color: ${props => props.theme.foreground};
	height: 100%;
	width: 0.5rem;
	border-radius: 110vw;
	margin: 0.5rem 0.25rem;
`

export default function PageDivider() {
	const { theme } = useContext(ThemeContext)

	return (
		<Divider theme={theme} />
	)
}