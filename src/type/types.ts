
export type Photo = {
  small: string | undefined
  big: string | undefined
}

export type User = {
  id: string
  name: string
  online: boolean
  local: string
  photo: {
    big: string | null
    small: string | null
  }
}

export type ActionError = {
  error: Error
}