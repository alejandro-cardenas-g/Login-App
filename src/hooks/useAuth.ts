import { useContext } from "react"
import { toast } from "react-toastify";
import { loginApi } from "../api/auth";
import { AuthContext } from "../context/AuthContext"
import { ILoginForm } from "../pages/Auth/Login/interfaces";

export const useAuth = () => {

    const {login, startLoading, finishLoading, auth, logout} = useContext(AuthContext);

    const loginAction = async(data: ILoginForm):Promise<void> => {
        
        try{
            startLoading();
            const response = await loginApi(data);
            const token = response.access;
            login(token);
            finishLoading();
            

        }catch(error:any){
            finishLoading();
            toast.error(error.message);

        }

    }

    return{
        loginAction,
        auth,
        logout
    }

}
