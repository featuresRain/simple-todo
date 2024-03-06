import {Task} from "@/entities";

export type EditTaskModalProps = {
    opened: boolean
    setOpened: (value: boolean) => unknown
    task: Task
}