import { combineReducers } from "redux"

const songReducer = () => {
    return [
        { title: ' Nevermind ', duration: '03:44' },
        { title: ' So far away ', duration: '03:44' },
        { title: ' This town ', duration: '13:44' },
        { title: ' Fast car ', duration: '03:44' },
        { title: ' Hey ', duration: '03:44' }
    ]
}

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.paylod
    }
    return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectSongReducer
})