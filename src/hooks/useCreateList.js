
import { useContext } from 'react'
import useCreateID from "@Hooks/useCreateID"
import { TodoListContext } from "@Context/TodoLists"

export default function useCreateList(listName) {
	const { setLists } = useContext(TodoListContext)

	const newList = {
		listId: useCreateID(),
		listName: listName,
		tasks: []
	}

	setLists(prevLists => [...prevLists, newList])
}