
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_Add } from '@Components/Icons'
import Subtask from '@Components/Subtask'

const SubtaskListContainer = styled.div`
	width: 100%;
	padding: 0;
	padding-bottom: 0.5rem;
`

const AddSubtask = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	color: ${props => props.theme.primary};
	margin: 1rem;
	margin-top: 0.75rem;
	width: max-content;

	.icon--add {
		height: 1.625rem;
		width: 1.625rem;
		margin-right: 0.5rem;
	}

	&:hover,
	&:focus {
		color: ${props => props.theme.focus};
	}
`

export default function SubtaskList({children}) {
	const { theme } = useContext(ThemeContext)

	return (
		<SubtaskListContainer theme={theme}>
			{ children }
			<AddSubtask theme={theme}>
				<Icon_Add />
				Create new subtask
			</AddSubtask>
		</SubtaskListContainer>
	)
}