import {ROOT_URL} from '../config';
import Auth from '../services/Auth'; 
import fetch from 'isomorphic-fetch';


export default class API {
    static getTodos(){
        return fetch(`${ROOT_URL}/todos`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "Authorization":`bearer ${Auth.getToken()}`                
            }
        });
    }

}