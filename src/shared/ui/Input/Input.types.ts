import {InputHTMLAttributes, ReactNode} from "react";

export type StyledInputProps = {
    icon?: ReactNode
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & StyledInputProps