import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes:IRoute[] = [
    {path: '/login', exact: true, component: Login}
]

export const privateRoutes:IRoute[] = [
    {path: '/', exact: true, component: Event}
]