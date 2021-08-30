
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import CheckButton from '@Components/CheckButton'
import DeleteButton from '@Components/DeleteButton'

const SubtaskContainer = styled.div`
	display: flex;
	align-items: center;
	color: ${props => props.theme.primary};
	width: 100%;
	margin-top: 0.25rem;
	padding: 0.5rem 1rem;

	.subtask-name {
		margin: 0;
		margin-right: auto;
		white-space: nowrap;
		overflow: hidden;
	}
`

export default function Subtask({subtaskId, subtaskName}) {
	const { theme } = useContext(ThemeContext)

	return (
		<SubtaskContainer theme={theme}>
			<CheckButton />
			<p className="subtask-name">{subtaskName}</p>
			<DeleteButton />
		</SubtaskContainer>
	)
}