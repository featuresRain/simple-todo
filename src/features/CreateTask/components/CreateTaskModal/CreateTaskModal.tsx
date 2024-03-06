import {FC, useEffect, useState} from "react";
import {CreateTaskModalProps} from './CreateTaskModal.types.ts'
import { createTask } from "@/entities"
import {Input, Modal, useAppDispatch} from "@/shared";
export const CreateTaskModal: FC<CreateTaskModalProps> = ({ opened, setOpened }) => {
    const [taskName, setTaskName] = useState("")
    const dispatch = useAppDispatch()

    useEffect(() => {
        setTaskName("")
    }, [opened])

    const create = () => {
        dispatch(createTask(taskName))
        setOpened(false)
    }

    return (
        <Modal
            opened={opened}
            setOpened={setOpened}
            title="New Task"
            onApply={create}
        >
            <Input
                placeholder='Enter Task Name'
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter')  create();
                }}
            />
        </Modal>
    )
}