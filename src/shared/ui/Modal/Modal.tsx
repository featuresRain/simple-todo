import {FC} from "react";
import {ModalProps} from './Modal.types.ts'
import * as S from './Modal.styled.ts'
import {Button} from "@/shared";


export const Modal: FC<ModalProps> = (props) => {

    const closeModal = () => props.setOpened(false)

    const onCancel = () => {
        props.onCancel && props.onCancel()
        closeModal()
    }

    const onApply = () => {
        props.onApply && props.onApply()
        closeModal()
    }

    if (!props.opened) return null;

    return (
        <S.Overlay>
            <S.StyledModal>
                <S.Title>{props.title}</S.Title>

                <S.ModalContent>
                    {props.children}
                </S.ModalContent>

                <S.Footer>
                    <Button onClick={onCancel} revertColors>Cancel</Button>

                    <Button onClick={onApply}>Apply</Button>
                </S.Footer>
            </S.StyledModal>
        </S.Overlay>
    )
}