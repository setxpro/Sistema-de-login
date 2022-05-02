import { Api } from "../../Services/Api"




export const LoginRequest = async(email: string, password: string) => {
    try {
        const { data } = await Api.post('login', { email, password });

        return data;
        
    } catch (error) {
        return null
    }
}