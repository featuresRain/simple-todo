import {FC, useState} from "react";
import EditIcon from '@/shared/icons/edit.svg'
import { EditTaskModal } from './components'
import {EditTaskProps} from './EditTask.types.ts'
import * as S from './EditTask.styled.ts'


export const EditTask: FC<EditTaskProps> = ({ task }) => {
    const [opened, setOpened] = useState(false)

    const openModal = () => setOpened(true)

    return (
        <S.Wrapper>
            <S.StyledEditTask onClick={openModal}>
                <EditIcon />
            </S.StyledEditTask>

            <EditTaskModal
                opened={opened}
                setOpened={setOpened}
                task={task}
            />
        </S.Wrapper>
    )
}