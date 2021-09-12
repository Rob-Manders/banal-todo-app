
import React, { useState, createContext } from 'react'

export const CurrentListContext = createContext()

export default function CurrentList({children}) {
	const [ currentList, setCurrentList ] = useState()

	return (
		<CurrentListContext.Provider value={{currentList, setCurrentList}}>
			{children}
		</CurrentListContext.Provider>
	)
}