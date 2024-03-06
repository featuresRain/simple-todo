import {CreateTask, TaskStateFilter} from "@/features";
import * as S from './ControlPanel.styled.ts'

export const ControlPanel = () => {
    return (
        <S.StyledControlPanel>
            <TaskStateFilter />

            <CreateTask />
        </S.StyledControlPanel>
    )
}