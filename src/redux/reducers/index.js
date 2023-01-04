import { combineReducers } from "redux";
import { songReducer, selectedSongReducer } from "./songReducer";

export const reducers = combineReducers({
    allSongs: songReducer,
    myChart: selectedSongReducer
});

export default reducers;