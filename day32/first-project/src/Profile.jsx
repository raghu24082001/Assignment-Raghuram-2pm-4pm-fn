import React from 'react'
import Card from './Card'

const Profile = ({ name, role }) => {
  return (
    <Card>
      <h2>{name}</h2>
      <p>{role}</p>
    </Card>
  )
}

export default Profile
