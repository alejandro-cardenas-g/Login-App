import { fetchSinToken } from "../helpers/fetch";
import { ILoginForm } from "../pages/Auth/Login/interfaces";

export const loginApi = async(data:ILoginForm) => {

    try{
        const response = await fetchSinToken('auth/login/', 'POST', data);

        const body = await response.json();

        if(response.ok === false){

            throw new Error('Revisa tus datos');
        }

        return body;
        

    }catch(error:any){
        if(error){
            throw new Error(error.message);
        }
    }

}