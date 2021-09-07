import { users, information } from './users'

const login = (username, password) => {
  const match = users.find(
    (user) => user.name.toLowerCase() === username && user.password === password
  )
  if (!match) {
    return null
  }
  const info = information.find((info) => info.userid === match.id)
  return { name: match.name, info }
}

export { login }
