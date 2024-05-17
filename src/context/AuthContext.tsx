import { createContext, useState } from "react";
import { AuthProviderProps } from "../models/interfaces/AuthProviderProps";
import { AuthContextType } from "../models/interfaces/AuthContextType";
import ApiB2bit from "../api/ApiB2bit";





export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [token, setToken] = useState<boolean>(false)
    const postToken = (tokenUser: string, stateUse: boolean) => {
        try {
            localStorage.setItem('TokenUser', tokenUser);
            setToken(stateUse)
        } catch (error) {
            console.error('Erro ao salvar o token no localStorage:', error);
        }
    };

    const getUser = async (token: string) => {
        try {
            const response = await ApiB2bit.get('/profile/', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json;version=v1_web',
                    'Content-Type': 'application/json'
                }
            });
            setToken(true)
            return response.status

        } catch (error) {
            console.error('Error fetching user profile:', error);
            setToken(false)
            return error

        }
    };

    const getToken = async () => {
        try {
            const tokenLocalStorage = localStorage.getItem('TokenUser');
            if (!tokenLocalStorage) {
                throw new Error('Token não encontrado no localStorage');
            }
            const response = await getUser(tokenLocalStorage)

            if (response === 200) {
                setToken(true)
            } else {
                setToken(false)
            }

        } catch (error) {
            console.error('Erro ao obter o token:', error);
            return null;
        }
    };

    return <AuthContext.Provider value={{ token, postToken, getToken }}>{children}</AuthContext.Provider>
}