import {FC} from "react";
import {InputProps} from './Input.types.ts'
import * as S from './Input.styled.ts'


export const Input: FC<InputProps> = (props) => {
    return (
        <S.InputContainer>
            <S.StyledInput {...props} />
            {props.icon && (
                <S.IconContainer>
                    {props.icon}
                </S.IconContainer>
            )}
        </S.InputContainer>
    )
}