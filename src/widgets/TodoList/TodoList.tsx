import {Todo, Empty} from './components'
import * as S from './TodoList.styled.ts'
import {useAppSelector} from "@/shared";


export const TodoList = () => {
    const { tasks } = useAppSelector(state => state.tasks)

    return (
        <S.StyledTodoList>
            {
                tasks.length === 0 ? (
                    <Empty />
                ) : (
                    tasks.map(task => (
                        <Todo key={task.id} {...task} />
                    ))
                )
            }
        </S.StyledTodoList>
    )
}