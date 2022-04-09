import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './routes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  

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
