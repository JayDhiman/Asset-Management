import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../Store/Authslice'
import Button from '../Button'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
 <Button onClick= {logoutHandler}>
    Logout
 </Button>
   

  )
}

export default LogoutBtn