import {ReactNode, createContext, useEffect, useState} from 'react'
import { UserDTO } from '../dtos/UserDTO'
import { api } from '../services/api'
import { storageUserSave, storageUserGet } from '../storage/storageUser'

export type AuthContextDataProps = {
  user: UserDTO
  singIn: (email: string, password: string) => Promise<void>
  isLoadingUserStorageData: boolean
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorage] = useState(true)

  async function singIn(email: string, password: string) {
    try {
      const {data} = await api.post('/sessions', {email,password})

      if(data.user) {
        setUser(data.user)
        storageUserSave(data.user)
      }
    } catch(error){
      throw error
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await storageUserGet()

      if(userLogged) {
        setUser(userLogged)
        
      }
    } catch(error) {
      throw error
    } finally {
      setIsLoadingUserStorage(false)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <AuthContext.Provider value={{user, singIn, isLoadingUserStorageData}}>
      {children}
    </AuthContext.Provider>
  )
}