import { Api } from "../../Services/Api"
import { IUser } from "./types";


export const setUserInLocalStorage = (user: IUser | null) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUserLocalStorage = () => {
    const json = localStorage.getItem('user');

    if (!json) return null

    const user = JSON.parse(json);

    return user ?? null;
}

export const LoginRequest = async(email: string, password: string) => {
    try {
        const { data } = await Api.post('login', { email, password });

        return data;
        
    } catch (error) {
        return null
    }
}