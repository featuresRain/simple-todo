import { MainPage } from "@/pages";
import {GlobalStyles} from "./globalStyles.ts";
import {store} from './store.ts'
import {Provider} from "react-redux";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Provider store={store}>
                <MainPage />
            </Provider>
        </>
    );
};
