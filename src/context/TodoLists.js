
import React, { createContext, useState } from 'react'

const TodoListContext = createContext()

export default function TodoLists({children}) {
	const [ todoLists, setTodoLists ] = useState(
		[
			{
				listId: 0,
				listName: 'Todo List 1',
				lists: [
					{
						taskId: 0,
						complete: false,
						taskName: "Task 1",
						subTasks: [
							{
								subtaskId: 0,
								complete: false,
								taskName: "Subtask 1"
							}
						]
					}
				]
			}
		]
	)

	function updateTodoLists(newTodoLists) {
		setTodoLists(newTodoLists)
	}

	return (
		<TodoListContext.Provider value={{todoLists, updateTodoLists}}>
			{ children }
		</TodoListContext.Provider>
	)
}