import { useState } from "react";
const TOKEN_KEY ="jwt"

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'login');
}

export const logout =  () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if(localStorage.getItem(TOKEN_KEY)) {
        console.log(localStorage.getItem(TOKEN_KEY));
        return true;
    }
    return false;
}