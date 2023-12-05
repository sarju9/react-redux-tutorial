import React from 'react'

const Users = (props) => {
  return (
    <>
        <h1>User Component</h1>
        <h4>{props.data.name}</h4>
        <h4>{props.data.age}</h4>

    </>
    )
}

export default Users;