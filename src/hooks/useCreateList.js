
import { useContext } from 'react'
import useCreateID from "@Hooks/useCreateID"
import { TodoListContext } from "@Context/TodoLists"

export default function useCreateList(listName) {
	const { todoLists, updateTodoLists } = useContext(TodoListContext)

	const newList = {
		listId: useCreateID(),
		listName: listName,
		tasks: []
	}

	updateTodoLists([...todoLists, newList])
}