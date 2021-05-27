import React from 'react'
import PropTypes from 'prop-types'

export const Profile = ({ fullName, bio, profession, children, handleName }) => {
    return (
        <div>

            {children}
            <h2>FullName: {fullName}</h2>
            <h2>Bio: {bio}</h2>
            <h2>Profession: {profession}</h2>
            <button onClick={() => handleName(fullName)}>Click me</button>
        </div>
    )
}
Profile.defaultProps = {
    fullName: "Alex",
    bio: "Write your Biography",
    profession: "Write your profession",
    handleName: () => alert('there is no function'),
}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.number,
    handleName: PropTypes.func.isRequired
}

