
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@Context/Theme'
import { Icon_Add } from '@Components/Icons'

const ListsContainer = styled.div`
	width: 100%;
	padding: 0 0.5rem;
`

const AddList = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	color: ${props => props.theme.primary};
	margin: 0.5rem;
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

export default function Lists({children}) {
	const { theme } = useContext(ThemeContext)
	return (
		<ListsContainer>
			{children}
			<AddList theme={theme}>
				<Icon_Add />
				Create new list
			</AddList>
		</ListsContainer>
	)
}