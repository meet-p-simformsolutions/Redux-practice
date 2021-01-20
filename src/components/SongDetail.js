import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
    return (
        <div className="song-details-wrapper" >
            <p className="heading">
                song details
            </p>
            <div className="details">

                <p className="stitle">
                    {song && song.title}
                </p>
                <p className="duration">
                    {song && song.duration}
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
