import {FC} from "react";
import { ButtonProps, IconButtonProps } from './Button.types.ts'
import * as S from './Button.styled.ts'


export const Button: FC<ButtonProps> = ({revertColors, children, ...buttonProps}) => {
    return <S.StyledButton {...buttonProps} revertColors={revertColors}>{children}</S.StyledButton>
}

export const IconButton: FC<IconButtonProps> = ({large, children, ...buttonProps}) => {
    return <S.StyledIconButton {...buttonProps} large={large}>{children}</S.StyledIconButton>
}