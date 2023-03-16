import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivetComponent = () => {
    // const navigate = useNavigate()
    const auth = localStorage.getItem('user');

  return  auth ? <Outlet /> : <Navigate to='/signUp' />


}

export default PrivetComponent