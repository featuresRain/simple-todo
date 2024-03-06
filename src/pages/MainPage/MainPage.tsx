import {useEffect} from "react";
import {ControlPanel, TodoList} from "@/widgets";
import {hydrateTaskState} from "@/entities";
import {Layout, useAppDispatch} from "@/shared";

export const MainPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(hydrateTaskState())
    }, [dispatch])

    return (
        <Layout>
            <ControlPanel />
            <TodoList />
        </Layout>
    )
}