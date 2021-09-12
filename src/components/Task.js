

import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_UpArrow, Icon_DownArrow } from '@Components/Icons'
import CheckButton from '@Components/CheckButton'
import ConfirmMenu from '@Components/ConfirmMenu'
import DeleteButton from '@Components/DeleteButton'
import Subtask from '@Components/Subtask'
import SubtaskList from '@Components/SubtaskList'

const TaskContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: ${props => props.deleting ? props.theme.deleteBackground : props.theme.foreground};
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
	cursor: pointer;
	position: relative;
	color: ${props => props.theme.primary};
	height: 1.625rem;
	width: 1.625rem;
	margin: 0 1rem;
	transition: color 150ms;

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

	&:hover,
	&:focus {
		color: ${props => props.theme.focus}
	}
`

export default function Task({taskId, taskName}) {
	const { theme } = useContext(ThemeContext)
	const [ viewSubtasks, setViewSubtasks ] = useState(false)
	const [ deleting, setDeleting ] = useState(false)

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
			<TaskContainer theme={theme} deleting={deleting}>
				<CheckButton complete={false} action={() => console.log('Task complete.')}/>
				<p className="list-name">{taskName}</p>
				<Arrow theme={theme} onClick={() => ToggleSubtaskList()}>
					{ viewSubtasks ? <Icon_UpArrow /> : <Icon_DownArrow /> }
				</Arrow>
				{
					deleting
					?
					<ConfirmMenu confirmAction={() => setDeleting(false)} cancelAction={() => setDeleting(false)} />
					:
					<DeleteButton action={() => setDeleting(true)} />
				}
			</TaskContainer>

			{ viewSubtasks && <SubtaskList parentTask={taskId} /> }
		</>
	)
}