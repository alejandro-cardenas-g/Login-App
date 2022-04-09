import { createContext, useState } from 'react';
import { JsxElement } from 'typescript';
import {Loader} from 'semantic-ui-react';

interface IAuth{
    auth: {
        token?: string
    };
    login: (token: string) => void;
    logout: () => void;
    startLoading: () => void;
    finishLoading: () => void;
    refreshAuth: (token: string) => void;
}

export const AuthContext = createContext<IAuth>({
    auth: {},
    login: (token: string):void => {},
    logout: () => {},
    startLoading: () => {},
    finishLoading: () => {},
    refreshAuth: (token: string): void => {}
});



export const AuthProvider = ({children}:IAuthProvider) => {

    const [auth, setAuth] = useState({});

    const [loading, setLoading] = useState(false);

    const login = (token: string):void => {

        setLoading(true);
        localStorage.setItem('token', token);
        setAuth(prev => ({...prev, token}));

    }

    const logout = ():void => {
        setLoading(false);
        setAuth({});
    }

    const startLoading = () => {
        setLoading(true);
    }

    const finishLoading = () => {
        setLoading(false);
    }

    const refreshAuth = (token: string): void => {
        setLoading(true);
        localStorage.setItem('token', token);
        setAuth(prev => ({...prev, token}));
    }

    if(loading === true) return <Loader active size='large'/>;

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            logout,
            startLoading,
            finishLoading,
            refreshAuth
        }}>
            {children}
        </AuthContext.Provider>
    )

}

interface IAuthProvider{
    children: React.ReactChild | React.ReactChild[] | JsxElement
}
