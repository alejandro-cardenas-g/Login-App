const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchSinToken = ( endpoint: string, method: string, data: any ):Promise<Response> => {

    const url = `${BASE_URL}/api/${endpoint}`;

    if(method === 'GET'){
        return fetch(
            url,
            {
                headers:{
                    "Content-Type": "application/json"
                }
            }
        );
    };

    const params = {
        method,
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return fetch(
        url,
        params
    )

}

export const fetchConToken = ( endpoint: string, method: string, data: any ):Promise<Response> => {
    const url = `api/${BASE_URL}/${endpoint}`;
    
    if(method === 'GET'){
        return fetch(
            url,
            {
                headers:{
                    "Content-Type": "application/json"
                }
            }
        );
    };

    const params = {
        method,
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    
    return fetch(
        url,
        params
    )
}