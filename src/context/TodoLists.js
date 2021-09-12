
import React, { createContext, useState } from 'react'

export const TodoListContext = createContext()

export default function TodoLists({children}) {
	const [ todoLists, setTodoLists ] = useState(
		[
			{
				listId: "XcqYjkRWvW",
				listName: 'Todo List 1',
				tasks: [
					{
						taskId: "bSkDfWIFXi",
						complete: false,
						taskName: "Task 1",
						subTasks: [
							{
								subtaskId: "SrWSzgGpK7",
								complete: false,
								taskName: "Subtask 1"
							},
							{
								subtaskId: "IDeqTRurSS",
								complete: false,
								taskName: "Subtask 2"
							},
							{
								subtaskId: "pEcvtM5Dok",
								complete: false,
								taskName: "Subtask 3"
							}
						]
					},
					{
						taskId: "4PWle1ydZw",
						complete: false,
						taskName: "Task 2",
						subTasks: [
							{
								subtaskId: "H5HCQFztPi",
								complete: false,
								taskName: "Subtask 1"
							},
							{
								subtaskId: "IaOqEpmvay",
								complete: false,
								taskName: "Subtask 2"
							},
							{
								subtaskId: "Gmxh8VMt2q",
								complete: false,
								taskName: "Subtask 3"
							}
						]
					}
				]
			},
			{
				listId: "GtSwcfYGLU",
				listName: 'Todo List 2',
				tasks: [
					{
						taskId: "62Tiyd21ZY",
						complete: false,
						taskName: "Task 1",
						subTasks: [
							{
								subtaskId: "1Yx3zC6rnl",
								complete: false,
								taskName: "Subtask 1"
							},
							{
								subtaskId: "DEhzypdQmv",
								complete: false,
								taskName: "Subtask 2"
							},
							{
								subtaskId: "eHuanIWfKj",
								complete: false,
								taskName: "Subtask 3"
							}
						]
					},
					{
						taskId: "HDjm9oPTUx",
						complete: false,
						taskName: "Task 2",
						subTasks: [
							{
								subtaskId: "Tv7Ky2pyMS",
								complete: false,
								taskName: "Subtask 1"
							},
							{
								subtaskId: "7IoUEe5G1F",
								complete: false,
								taskName: "Subtask 2"
							},
							{
								subtaskId: "xOtmi0Et2V",
								complete: false,
								taskName: "Subtask 3"
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