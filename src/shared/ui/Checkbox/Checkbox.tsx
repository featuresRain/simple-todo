import {FC} from "react";
import DoneIcon from '@/shared/icons/done.svg'
import {CheckboxProps} from './Checkbox.types.ts'
import * as S from './Checkbox.styled.ts'


export const Checkbox: FC<CheckboxProps> = (props) => {
    return (
        <S.StyledCheckbox
            onClick={() => props.onChange(!props.active)}
            className={props.active ? "active" : ""}
        >
            <S.DoneIndicator>
                <DoneIcon />
            </S.DoneIndicator>
        </S.StyledCheckbox>
    )
}