import React from 'react'
import { useAuth } from '../../../../hooks'

async function CreatePost() {
  const {user, login } = useAuth()
  //  await login('rirynomenjanahary@gmail.com','Riry7474*!#')
  return (
    <div>{console.log(user)}</div>
  )
}

export default CreatePost