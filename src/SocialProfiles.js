import React, { Component } from 'react';
import SOCIAL_PROFILES from './content/socialProfile'

class SocialProfile extends Component {
    render() {
        const { image, link } = this.props.socialProfile;
        return (
            <div style={{ display: 'inline-block' }}>
                <div >
                    <a href={link} target='_bank' ><img src={image} alt='social_profile_logo' style={{ width: 25, height: 25,  margin: 5 }}/></a>
                </div>
            </div>

        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return (
                            <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                        )
                    })
                }
            </div>
        )
    }
}

export default SocialProfiles;