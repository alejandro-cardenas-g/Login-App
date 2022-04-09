import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

export const PublicRoute = ({children}: IPublicRoute) => {

  const {auth} = useAuth();

  return (
    <>

      {
        auth?.token
        ? <Navigate to='/home'/>
        : children
      }

    </>
  )
}

interface IPublicRoute{
  children?: React.ReactChild | React.ReactChild[] | JSX.Element
}
