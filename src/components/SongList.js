import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {

    renderList() {

        return this.props.songs.map((song) => {
            return (
                <div className="songItem" key={song.title} >
                    <div className="song-title">
                        {song.title}
                    </div>
                    <button onClick={ () => this.props.selectSong(song)} > Select </button>
                </div>
            )
        })
    }

    render() {

        return (
            <div>
                <p className="title">
                    Song list
                </p>
                <div className="song-all">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}
export default connect(mapStateToProps, { selectSong })(SongList)