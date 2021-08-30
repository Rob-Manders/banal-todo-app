
import React from 'react'
import styled from 'styled-components'
import CancelButton from '@Components/CancelButton'
import ConfirmButton from '@Components/ConfirmButton'

const ConfirmMenuContainer = styled.div`
	height: 1.625rem;
	display: flex;
`

export default function ConfirmMenu({confirmAction, cancelAction}) {
	return (
		<ConfirmMenuContainer>
			<ConfirmButton action={confirmAction} />
			<CancelButton action={cancelAction} />
		</ConfirmMenuContainer>
	)
}