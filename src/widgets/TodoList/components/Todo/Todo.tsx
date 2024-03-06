import {FC} from 'react'
import {Task} from "@/entities";
import * as S from './Todo.styled.ts'
import {DeleteTask, EditTask, TaskCheckbox} from "@/features";

export const Todo: FC<Task> = (props) => {
    return (
        <S.StyledTodo>
            <S.TodoSection>
                <TaskCheckbox task={props} />

                <S.TodoTitle className={props.completed ? "completed" : ""}>{props.title}</S.TodoTitle>
            </S.TodoSection>

            <S.TodoSection>
                <EditTask task={props} />
                <DeleteTask taskId={props.id} />
            </S.TodoSection>
        </S.StyledTodo>
    )
}