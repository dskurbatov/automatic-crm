export const isValidEmail = (email) => {
  return email.includes('@')
}

export const isValidPassword = (password) => {
  return password.length > 1
}

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0
}

export const isValidURL = (str) => {
  return /https?/.test(str)
}