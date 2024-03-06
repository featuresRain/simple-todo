import {ButtonHTMLAttributes, PropsWithChildren} from "react";

export type StyledButtonProps = {
    revertColors?: boolean
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & StyledButtonProps


export type StyledIconButtonProps = {
    large?: boolean
}

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & StyledIconButtonProps