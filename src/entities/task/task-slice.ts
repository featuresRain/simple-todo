import {v4 as generateId} from 'uuid'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LocalStorageSaver} from '@/shared'
import {filterTasks} from './task-utils.ts'
import {Task, TaskFilter, taskInitialState, TaskState} from './task-types.ts'

const taskSaver = new LocalStorageSaver<TaskState>("tasks", taskInitialState)

const taskSlice = createSlice({
    name: "tasks",
    reducers: {
        hydrateTaskState() {
            const state = taskSaver.getState()
            if (state.filter === TaskFilter.ALL) return state

            state.tasks = filterTasks(state.tasks, state.filter)
            return state
        },

        createTask(state, action: PayloadAction<string>) {
            state.tasks.push({
                id: generateId(),
                title: action.payload,
                completed: false
            })
            taskSaver.save(state)
        },

        editTaskData(state, action: PayloadAction<Task>) {
            state.tasks = state.tasks.map(task => {
                if (task.id !== action.payload.id) return task;
                return action.payload
            })
            taskSaver.save(state)
        },

        deleteTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
            taskSaver.save(state)
        },

        changeTaskFilter(state, action: PayloadAction<TaskFilter>) {
            const savedState = taskSaver.getState()
            state.tasks = savedState.tasks

            state.tasks = filterTasks(state.tasks, action.payload)
            state.filter = action.payload

            taskSaver.save({
                ...savedState,
                filter: action.payload
            })
        }
    },
    initialState: taskInitialState
})

export const taskReducer = taskSlice.reducer
export const {
    createTask,
    editTaskData,
    deleteTask,
    hydrateTaskState,
    changeTaskFilter
} = taskSlice.actions