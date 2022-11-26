import { useRoutes, RouteObject, useLocation, Navigate } from 'react-router-dom'

import Login from '../pages/login'
import WelCome from '../pages/admin/welcome'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <WelCome/>
  },
  {
    path: '/login',
    element: <Login/>
  }
]

function renderRouter(){
  const router = useRoutes(routes);
  const location = useLocation()
  const token = localStorage.getItem("token")

  if(!token && location.pathname !== '/login'){
    return <Navigate to={'/login'}/>
  }

  return router
}

export default renderRouter