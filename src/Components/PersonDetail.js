import React, { Component } from 'react';
import { getPersonDetail } from '../Actions';
import { connect } from 'react-redux';
import PersonDetailAlbum from './PersonDetailAlbum';

class PersonDetail extends Component {

    componentDidMount() {
        this.props.getPersonDetail(this.props.match.params.name)
    }
    render() {
        return (
            <div>
                {
                    this.props.singlePerson && this.props.singlePerson.map(p => {
                        return (
                            <div key={p.id}>
                                <div className="detailContainer">
                                    <div className="detailProfilePicContainer">
                                        <img src={`/Albums/${p.name}/${p.profile_pic}.jpeg`} alt="" />
                                    </div>
                                    <div className="detailRightSide">
                                        <div className="nameAndFollower">
                                            <h1>{p.profile_name}</h1>
                                            <button className='button'>Follow</button>
                                            <button className='button'>Message</button>
                                        </div>
                                        <div className="followerAndFollowing">
                                            <h1>{p.followers} <span>Follower</span> </h1>
                                            <h1>{p.following} <span>Following</span> </h1>
                                        </div>
                                        <div className="bio">
                                            <h1>About</h1>
                                            <p>{p.bio}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <PersonDetailAlbum photos={p.albums} name={p.name} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('/////',state)
    return {
        singlePerson: state.people.getPersonDetail
    }
}

export default connect(mapStateToProps, { getPersonDetail })(PersonDetail)
