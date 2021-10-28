

export interface AuthState {
    isAuth: boolean
}

export enum AuthActionEnum {
    SET_AUTH = 'SET-Auth'
}

export interface  SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

export type AuthAction =
    SetAuthAction