
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { TodoListContext } from '@Context/TodoLists'
import { Icon_Add } from '@Components/Icons'
import List from '@Components/List'

const ListsContainer = styled.div`
	width: 100%;
	padding: 0 0.5rem;
`

const AddList = styled.div`
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
	const { todoLists } = useContext(TodoListContext)
	return (
		<ListsContainer theme={theme}>
			{
				todoLists.map(list => <List key={list.listId} listId={list.listId} listName={list.listName} />)
			}
			<AddList theme={theme}>
				<Icon_Add />
				Create new list
			</AddList>
		</ListsContainer>
	)
}