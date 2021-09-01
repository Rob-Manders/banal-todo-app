
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_Check } from '@Components/Icons'

const ConfirmButtonContainer = styled.div`
	cursor: pointer;
	color: ${props => props.theme.primary};
	height: 1.625rem;
	margin-right: 0.5rem;
	transition: color 150ms;

	.icon--check{
		height: 1.625rem;
	}

	&:hover,
	&:focus {
		color: ${props => props.theme.focus};
	}
`

export default function ConfirmButton({action}) {
	const { theme } = useContext(ThemeContext)

	return (
		<ConfirmButtonContainer theme={theme} onClick={action}>
			<Icon_Check />
		</ConfirmButtonContainer>
	)
}