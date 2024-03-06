import {useState} from "react";
import {IconButton} from "@/shared";
import AddIcon from "@/shared/icons/add.svg"
import {CreateTaskModal} from './components'
import * as S from './CreateTask.styled.ts'


export const CreateTask = () => {
    const [opened, setOpened] = useState(false)

    const openModal = () => setOpened(true);

    return (
        <S.Wrapper>
            <IconButton onClick={openModal}>
                <AddIcon />
            </IconButton>

            <CreateTaskModal opened={opened} setOpened={setOpened} />
        </S.Wrapper>
    )
}