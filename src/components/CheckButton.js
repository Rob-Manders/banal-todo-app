
import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_Check, Icon_Circle } from '@Components/Icons'

const CheckButtonContainer = styled.div`
	cursor: pointer;
	color: ${props => props.theme.primary};
	height: 1.625rem;
	margin-right: 0.5rem;
	transition: color 150ms;

	.icon--check,
	.icon--circle {
		height: 1.625rem;
	}

	.icon--circle {
		opacity: 0.3;
	}

	&:hover,
	&:focus {
		color: ${props => props.theme.focus};
	}
`

export default function CheckButton({complete, action}) {
	const { theme } = useContext(ThemeContext)

	return (
		<CheckButtonContainer theme={theme} onClick={action}>
			{ complete ? <Icon_Check /> : <Icon_Circle /> }
		</CheckButtonContainer>
	)
}