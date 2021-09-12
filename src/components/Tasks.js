
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { TodoListContext } from '@Context/TodoLists'
import { CurrentListContext } from '@Context/CurrentList'
import { Icon_Add } from '@Components/Icons'
import Task from '@Components/Task'

const TasksContainer = styled.div`
	width: 100%;
	padding: 0 0.5rem;
`

const AddTask = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	color: ${props => props.theme.primary};
	margin: 1rem;
	width: max-content;
	transition: color 150ms;

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

export default function Lists() {
	const { theme } = useContext(ThemeContext)
	const { tasks } = useContext(TodoListContext)
	const { currentList } = useContext(CurrentListContext)

	return (
		<TasksContainer>
			{
				tasks.map(task => task.parent === currentList && <Task key={task.taskId} taskId={task.taskId} taskName={task.taskName} />)
			}
			<AddTask theme={theme}>
				<Icon_Add />
				Create new task
			</AddTask>
		</TasksContainer>
	)
}