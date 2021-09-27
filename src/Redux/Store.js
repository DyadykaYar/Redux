import {createStore} from "redux";
import {root_reducer} from "./All_reducers";

export let store = createStore(root_reducer);