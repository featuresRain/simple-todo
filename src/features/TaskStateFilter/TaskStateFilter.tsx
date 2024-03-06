import {Select, SelectOption, useAppDispatch, useAppSelector} from "@/shared";
import {changeTaskFilter} from "@/entities";

const filterOptions: SelectOption[] = [
    { value: -1, label: "All" },
    { value: 0, label: "Incomplete" },
    { value: 1, label: "Complete" },

]

export const TaskStateFilter = () => {
    const { filter } = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()

    const changeFilterOption = (value: number) => {
        dispatch(changeTaskFilter(value))
    }

    return (
        <Select
            options={filterOptions}
            activeOption={filterOptions[filter + 1]}
            onChange={changeFilterOption}
        />
    )
}