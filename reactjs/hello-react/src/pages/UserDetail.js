import { useParams } from "react-router-dom"
import {USERS} from '../data'

function UserDetail() {
  const params = useParams()

  const user = USERS.find(g => g.login === params.login)

  console.log(params)

  if (!user) {
    return <h3>Not found</h3>
  }

  return (
    <h1 style={{color: params.language}}>This is user login: {user.fullName}</h1>
  )
}

export default UserDetail
