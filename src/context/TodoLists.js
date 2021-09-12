
import React, { createContext, useState } from 'react'

export const TodoListContext = createContext()

export default function TodoLists({children}) {
	const [ lists, setLists ] = useState(
		[
			{
				listId: "XcqYjkRWvW",
				listName: 'Todo List 1',
			},
			{
				listId: "GtSwcfYGLU",
				listName: 'Todo List 2',
			}
		]
	)

	const [ tasks, setTasks ] = useState([
		{
			taskId: "bSkDfWIFXi",
			parent: "XcqYjkRWvW",
			complete: false,
			taskName: "Task 1"
		},
		{
			taskId: "4PWle1ydZw",
			parent: "XcqYjkRWvW",
			complete: false,
			taskName: "Task 2"
		},
		{
			taskId: "62Tiyd21ZY",
			parent: "GtSwcfYGLU",
			complete: false,
			taskName: "Task 1"
		},
		{
			taskId: "HDjm9oPTUx",
			parent: "GtSwcfYGLU",
			complete: false,
			taskName: "Task 2"
		}
	])

	const [ subtasks, setSubtasks ] = useState([
		{
			subtaskId: "SrWSzgGpK7",
			parent: "bSkDfWIFXi",
			complete: false,
			subtaskName: "Subtask 1"
		},
		{
			subtaskId: "IDeqTRurSS",
			parent: "bSkDfWIFXi",
			complete: false,
			subtaskName: "Subtask 2"
		},
		{
			subtaskId: "pEcvtM5Dok",
			parent: "bSkDfWIFXi",
			complete: false,
			subtaskName: "Subtask 3"
		},
		{
			subtaskId: "H5HCQFztPi",
			parent: "4PWle1ydZw",
			complete: false,
			subtaskName: "Subtask 1"
		},
		{
			subtaskId: "IaOqEpmvay",
			parent: "4PWle1ydZw",
			complete: false,
			subtaskName: "Subtask 2"
		},
		{
			subtaskId: "Gmxh8VMt2q",
			parent: "4PWle1ydZw",
			complete: false,
			subtaskName: "Subtask 3"
		}
	])

	return (
		<TodoListContext.Provider value={{lists, tasks, subtasks, setLists, setTasks, setSubtasks}}>
			{ children }
		</TodoListContext.Provider>
	)
}