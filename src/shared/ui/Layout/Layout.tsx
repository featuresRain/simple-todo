import * as S from './Layout.styled.ts'
import {FC, PropsWithChildren} from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <S.StyledLayout>
            <S.Title>TODO LIST</S.Title>

            <S.PageContent>
                {children}
            </S.PageContent>
        </S.StyledLayout>
    )
}