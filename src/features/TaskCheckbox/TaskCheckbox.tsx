import {FC} from "react";
import {TaskCheckboxProps} from './TaskCheckbox.types.ts'
import {Checkbox, useAppDispatch} from "@/shared";
import {editTaskData} from "@/entities";


export const TaskCheckbox: FC<TaskCheckboxProps> = ({task}) => {
    const dispatch = useAppDispatch()

    const toggleCheckbox = () => {
        dispatch(editTaskData({
            ...task,
            completed: !task.completed
        }))
    }

    return (
        <Checkbox onChange={toggleCheckbox} active={task.completed} />
    )
}