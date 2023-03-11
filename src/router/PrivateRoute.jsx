import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({isAuth}) => {
  return (
    <div>
        {isAuth ? <Outlet /> : <Navigate to={'/'} />}
    </div>
  )
}

export default PrivateRoute