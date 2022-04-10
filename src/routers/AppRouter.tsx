import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './routes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import {Loader} from 'semantic-ui-react';

export const AppRouter = () => {

  const {tokenVerifyAction, loading} = useAuth();

  useEffect(() => {

    if(localStorage.getItem('token')){
      (async() => {
        await tokenVerifyAction();
      })();
    }

  }, []);

  if(loading) return <Loader/>

  return (
    <BrowserRouter>
    
        <Routes>

            <Route path='/'>

              {

                routes.map(({path, element: Component, routeType}) => (

                  <Route
                    key={path}
                    path={path}
                    element={
                        (routeType) 
                        ?
                          <PrivateRoute>
                            <Component/>    
                          </PrivateRoute>
                        :
                          <PublicRoute>
                            <Component/>
                          </PublicRoute>
                    }
                  />

                ))

              }

            </Route>

        </Routes>
    
    </BrowserRouter>
  )
}
