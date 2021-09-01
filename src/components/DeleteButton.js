
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_Bin } from '@Components/Icons'

const DeleteButtonContainer = styled.div`
	cursor: pointer;
	color: ${props => props.theme.primary};
	height: 1.625rem;
	opacity: 0.3;
	transition: 150ms;

	.icon--bin {
		height: 1.625rem;
	}

	&:hover,
	&:focus {
		color: ${props => props.theme.focus};
		opacity: 1;
	}
`

export default function DeleteButton({action}) {
	const { theme } = useContext(ThemeContext)

	return (
		<DeleteButtonContainer theme={theme} onClick={action}>
			<Icon_Bin />
		</DeleteButtonContainer>
	)
}