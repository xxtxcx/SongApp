import { ActionTypes } from "../constants/action-types";
export const setSongs = (songs) => {
    return {
        type: ActionTypes.SET_SONGS,
        payload: songs,
    };
};

export const selectedSong = (song) => {
    return {
        type: ActionTypes.SELECTED_SONG,
        payload: song,
    };
};

export const removeSelectedSong = (song) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_SONG,
        payload: song,
    };
};