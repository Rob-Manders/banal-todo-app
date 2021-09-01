
import React, { useState, createContext } from 'react'

export const ShowListsContext = createContext()

export default function ShowLists({children}) {
	const [ showLists, setShowLists ] = useState(true)

	function toggleShowLists() {
		setShowLists(prevShowLists => !prevShowLists)
	}

	return (
		<ShowListsContext.Provider value={{showLists, setShowLists, toggleShowLists}}>
			{ children }
		</ShowListsContext.Provider>
	)
}