import {FC, useState} from "react";
import ChevronIcon from '@/shared/icons/chevron.svg'
import { SelectProps } from './Select.types.ts'
import * as S from './Select.styled.ts'


export const Select: FC<SelectProps> = (props) => {
    const [opened, setOpened] = useState(false)

    const toggleOpened = () => setOpened(prev => !prev)

    return (
        <S.StyledSelect onClick={toggleOpened}>
            <S.ActiveOption>
                {props.activeOption.label}

                <ChevronIcon />
            </S.ActiveOption>

            {opened && (
                <S.OptionsContainer>
                    {props.options.map(opt => (
                        <S.Option onClick={() => props.onChange(opt.value)} key={String(opt.value)}>
                            {opt.label}
                        </S.Option>
                    ))}
                </S.OptionsContainer>
            )}
        </S.StyledSelect>
    )
}