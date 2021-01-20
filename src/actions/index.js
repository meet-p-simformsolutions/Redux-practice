export const selectSong = song => {
    return {
        type: "SONG_SELECTED",
        paylod: song
    }
}