
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_Bin } from '@Components/Icons'

const ListItem = styled.div`
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
	}
`

const DeleteButton = styled.div`
	cursor: pointer;
	color: ${props => props.theme.primary};
	height: 1.625rem;

	.icon--bin {
		height: 1.625rem;
	}

	&:hover,
	&:focus {
		color: ${props => props.theme.focus};
	}
`

export default function List({listId, listName}) {
	const { theme } = useContext(ThemeContext)

	return (
		<ListItem theme={theme}>
			<p className="list-name">{listName}</p>
			<DeleteButton theme={theme}>
				<Icon_Bin />
			</DeleteButton>
		</ListItem>
	)
}