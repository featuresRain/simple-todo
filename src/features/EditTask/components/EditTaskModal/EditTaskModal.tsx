import {FC, useEffect, useState} from "react";
import {Input, Modal, useAppDispatch} from "@/shared"
import {EditTaskModalProps} from './EditTaskModal.types.ts'
import {editTaskData} from "@/entities";



export const EditTaskModal: FC<EditTaskModalProps> = ({ task, opened, setOpened }) => {
    const [taskTitle, setTaskTitle] = useState(task.title)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setTaskTitle(task.title)
    }, [task.title])

    const editTodo = () => {
        dispatch(editTaskData({
            ...task,
            title: taskTitle
        }))
        setOpened(false)
    }

    return (
        <Modal
            opened={opened}
            setOpened={setOpened}
            title="Edit Task"
            onApply={editTodo}
        >
            <Input
                placeholder="Enter New Title For Task"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}
                onKeyDown={e => {
                    if (e.key === "Enter") editTodo();
                }}
            />
        </Modal>
    )
}