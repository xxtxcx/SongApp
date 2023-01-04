import  songs  from '../../data/songs.json'
import { ActionTypes } from '../constants/action-types';
const initialState = {
    songs,
}
export const songReducer = (state = initialState.songs, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_SONGS:
            return {...state, payload};
        default:
            return state;
    }
};

export const selectedSongReducer = (state = [], {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_SONG:
            return [
                ...state, payload.song
            ];    
        case ActionTypes.REMOVE_SELECTED_SONG:
            return [
                ...state.filter(item => item !== payload.song),
            ];     
        default:
            return state;
    }
};
