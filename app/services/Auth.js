export default class Auth{
    static setToken(token){
        localStorage.setItem('token',token);
    }

    static isLoggedIn(){
        return localStorage.getItem('token')!==null;
    }

    static getToken(){
        return localStorage.getItem('token');
    }
}
