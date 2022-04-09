import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

export const PrivateRoute = ({children}: IPrivateRoute) => {

  const {auth} = useAuth();

  return (
    <>

      {
        auth?.token
        ? children
        : <Navigate to='/'/>
      }

    </>
  )
}

interface IPrivateRoute{
  children?: React.ReactChild | React.ReactChild[] | JSX.Element
}
