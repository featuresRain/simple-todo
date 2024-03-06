export type Task = {
    id: string
    title: string
    completed: boolean
}

export enum TaskFilter {
    ALL = -1,
    INCOMPLETE,
    COMPLETE
}


export type TaskState = {
    tasks: Task[],
    filter: TaskFilter
}

export const taskInitialState: TaskState = {
    tasks: [],
    filter: TaskFilter.ALL
}