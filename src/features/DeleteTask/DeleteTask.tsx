import {FC} from "react";
import {deleteTask} from "@/entities";
import DeleteIcon from "@/shared/icons/delete.svg"
import {useAppDispatch} from "@/shared";
import {DeleteTaskProps} from './DeleteTask.types.ts'
import * as S from './DeleteTask.styled.ts'


export const DeleteTask: FC<DeleteTaskProps> = ({taskId}) => {
    const dispatch = useAppDispatch()

    const deleteTodo = () => {
        dispatch(deleteTask(taskId))
    }

    return (
        <S.StyledDeleteTask onClick={deleteTodo}>
            <DeleteIcon />
        </S.StyledDeleteTask>
    )
}