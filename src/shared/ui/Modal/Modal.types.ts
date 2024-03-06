import {PropsWithChildren} from "react";

export type ModalProps = PropsWithChildren & {
    opened: boolean
    setOpened: (value: boolean) => unknown
    title: string
    onCancel?: () => unknown
    onApply?: () => unknown
}