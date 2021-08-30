

import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_UpArrow, Icon_DownArrow } from '@Components/Icons'
import CheckButton from '@Components/CheckButton'
import DeleteButton from '@Components/DeleteButton'
import Subtask from '@Components/Subtask'
import SubtaskList from '@Components/SubtaskList'

const TaskContainer = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	background-color: ${props => props.theme.foreground};
	color: ${props => props.theme.primary};
	width: 100%;
	margin-top: 0.5rem;
	padding: 1rem;
	border-radius: 0.5rem;

	.list-name {
		margin: 0;
		margin-right: auto;
		white-space: nowrap;
		overflow: hidden;
	}
`

const Arrow = styled.div`
	position: relative;
	color: ${props => props.theme.primary};
	height: 1.625rem;
	width: 1.625rem;
	margin: 0 1rem;

	.icon--arrow {
		height: 1.625rem;
	}

	.icon--up-arrow {
		position: absolute;
		top: 25%;
		right: 0;
	}

	.icon--down-arrow {
		position: absolute;
		bottom: 25%;
		right: 0;
	}
`

export default function List({taskId, taskName}) {
	const { theme } = useContext(ThemeContext)
	const [ viewSubtasks, setViewSubtasks ] = useState(false)

	function ToggleSubtaskList() {
		setViewSubtasks(prevViewSubtasks => !prevViewSubtasks)
	}

	const subTasks = (
		<SubtaskList>
			<Subtask subtaskId={0} subtaskName="A subtask to do" />
			<Subtask subtaskId={1} subtaskName="Another subtask to do" />
		</SubtaskList>
	)

	return (
		<>
			<TaskContainer theme={theme} onClick={() => ToggleSubtaskList()}>
				<CheckButton />
				<p className="list-name">{taskName}</p>
				<Arrow theme={theme}>
					{ viewSubtasks ? <Icon_UpArrow /> : <Icon_DownArrow /> }
				</Arrow>
				<DeleteButton />
			</TaskContainer>

			{ viewSubtasks && subTasks }
		</>
	)
}