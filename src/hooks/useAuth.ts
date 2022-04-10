import { useContext } from "react"
import { toast } from "react-toastify";
import { loginApi, tokenRefreshApi, verifyTokenApi } from '../api/auth';
import { AuthContext } from "../context/AuthContext"
import { ILoginForm } from "../pages/Auth/Login/interfaces";

export const useAuth = () => {

    const {login, startLoading, finishLoading, auth, logout, refreshAuth, loading} = useContext(AuthContext);

    const loginAction = async(data: ILoginForm):Promise<void> => {
        
        try{
            startLoading();
            const response = await loginApi(data);
            const {access:token, refresh} = response;
            login(token, refresh);
            finishLoading();
            

        }catch(error:any){
            finishLoading();
            toast.error(error.message);

        }

    }

    const tokenVerifyAction = async() => {

        try{
            startLoading();
            const response = await verifyTokenApi();
            
            if(response){
                finishLoading();
                refreshAuth();
            }else{

                await tokenRefreshAction();
            }
            
        }catch(error:any){
            finishLoading();
            toast.error(error.message);
        }

    }

    const tokenRefreshAction = async() => {

        try{

            const response = await tokenRefreshApi();
            if(response === null){
                logout();
            }else{
                finishLoading();
                refreshAuth(response.access);
            }
            
            finishLoading();

        }catch(error: any){
            finishLoading();
            toast.error(error.message);
        }

    }

    return{
        loginAction,
        auth,
        logout,
        tokenVerifyAction,
        loading
    }

}
