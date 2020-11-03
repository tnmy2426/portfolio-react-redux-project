import React, { Component } from 'react'

class PersonDetailAlbum extends Component {
    render() {
        return (
            <div className="detailAlbumsListContainer">
                {
                    this.props.photos.map(pic => {
                        return (
                            <div key={pic.cover} className="detailSinglePicContainer">
                                <img src={`Albums/${this.props.name}/${pic.cover}.jpeg`} className="detailAlbumPic" alt="personalAlbum" />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PersonDetailAlbum
