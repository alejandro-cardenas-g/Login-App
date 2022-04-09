import { Home, Login } from "../pages";
import { IRoute } from "./interfaces";

export const authRoutes:IRoute[] = [
    {
        path: '',
        element: Login,
        routeType: false
    },
    {
        path: 'home',
        element: Home,
        routeType: true
    }
]