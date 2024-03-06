import EmptyIcon from "@/shared/icons/empty.svg"
import * as S from './Empty.styled.ts'

export const Empty = () => {
    return (
        <S.StyledEmpty>
            <EmptyIcon />

            <S.EmptyText>Empty...</S.EmptyText>
        </S.StyledEmpty>
    )
}