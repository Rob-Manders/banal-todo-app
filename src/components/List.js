
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_Bin } from '@Components/Icons'
import DeleteButton from '@Components/DeleteButton'

const ListContainer = styled.div`
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
	}

	&:hover,
	&:focus {
		.list-name {
			color: ${props => props.theme.focus}
		}
	}
`

export default function List({listId, listName}) {
	const { theme } = useContext(ThemeContext)

	return (
		<ListContainer theme={theme}>
			<p className="list-name">{listName}</p>
			<DeleteButton />
		</ListContainer>
	)
}