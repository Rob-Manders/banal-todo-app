
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_Cancel } from '@Components/Icons'

const CancelButtonContainer = styled.div`
	cursor: pointer;
	color: ${props => props.theme.primary};
	height: 1.625rem;

	.icon--cancel{
		height: 1.625rem;
	}

	&:hover,
	&:focus {
		color: ${props => props.theme.focus};
	}
`

export default function CancelButton({action}) {
	const { theme } = useContext(ThemeContext)

	return (
		<CancelButtonContainer theme={theme} onClick={action}>
			<Icon_Cancel />
		</CancelButtonContainer>
	)
}