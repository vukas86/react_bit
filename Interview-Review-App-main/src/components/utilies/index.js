const TOKEN_KEY ="$2a$10$Ht9ATCnB3LhyEpPg.c/GOuLzkMYD2WRPZ3ZtFVP.uVCrx.nW/rwVq";

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