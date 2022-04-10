import { createContext, useState } from 'react';
import { JsxElement } from 'typescript';

interface IAuth{
    auth: {
        token?: string;
    };
    login: (token: string, refresh: string) => void;
    logout: () => void;
    startLoading: () => void;
    finishLoading: () => void;
    refreshAuth: (token?: string) => void;
    loading: boolean;
}

export const AuthContext = createContext<IAuth>({
    auth: {},
    login: (token: string, refresh: string):void => {},
    logout: () => {},
    startLoading: () => {},
    finishLoading: () => {},
    refreshAuth: (token?: string): void => {},
    loading: false
});



export const AuthProvider = ({children}:IAuthProvider) => {

    const [auth, setAuth] = useState({});

    const [loading, setLoading] = useState(false);

    const login = (token: string, refresh: string):void => {

        setLoading(true);
        localStorage.setItem('token', token);
        localStorage.setItem('refresh', refresh);
        setAuth(prev => ({...prev, token}));

    }

    const logout = ():void => {
        setLoading(false);
        localStorage.clear();
        setAuth({});
    }

    const startLoading = () => {
        setLoading(true);
    }

    const finishLoading = () => {
        setLoading(false);
    }

    const refreshAuth = (token?:string): void => {
        if(token){
            localStorage.setItem('token', token);
            setAuth(prev => ({...prev, token}));
        }else{
            setAuth(prev => ({...prev, token: localStorage.getItem('token')}));
        }
        
    }

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            logout,
            startLoading,
            finishLoading,
            refreshAuth,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )

}

interface IAuthProvider{
    children: React.ReactChild | React.ReactChild[] | JsxElement
}
