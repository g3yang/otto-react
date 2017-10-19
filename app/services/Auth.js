export default class Auth{
    static setToken(token){
        localStorage.setItem('token',token);
    }

    static isUserAuthenticated(){
        return localStorage.getItem('token')!==null;
    }
    
    static getToken(){
        return localStorage.getItem('token');
    }
}
