export type SelectOption = {
    label: string
    value: number
}

export type SelectProps = {
    options: SelectOption[],
    activeOption: SelectOption
    onChange: (value: number) => unknown
}