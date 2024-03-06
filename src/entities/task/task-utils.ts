import {Task, TaskFilter} from "./task-types.ts";

export const filterTasks = (tasks: Task[], filter: TaskFilter) => {
    if (filter === TaskFilter.ALL) return tasks;
    return tasks.filter(task => task.completed === Boolean(filter))
}