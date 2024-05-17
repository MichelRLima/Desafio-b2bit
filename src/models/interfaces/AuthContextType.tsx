export interface AuthContextType {
    token: boolean;
    postToken: (tokenUser: string, stateUse: boolean) => void;
    getToken: () => void,

}