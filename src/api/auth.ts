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

export const verifyTokenApi = async() => {

    try{
        
        const response = await fetchSinToken('auth/verify/', 'POST', {'token': localStorage.getItem('token')});
        
        if(response.status !== 200){

            return false;
        }

        return true;

    }catch(error: any){
        throw new Error(error.message);
    }

}

export const tokenRefreshApi = async() => {
    try{

        const response = await fetchSinToken('auth/refresh/', 'POST', {'refresh': localStorage.getItem('refresh')});

        const body = await response.json();

        if(response.ok === true){

            return body;
        }

        return null;

    }catch(error: any){
        throw new Error(error.message);
    }
}