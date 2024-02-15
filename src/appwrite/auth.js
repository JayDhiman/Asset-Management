import conf from '../conf/conf.js'

import { Client, Account,ID} from 'appwrite';

// authservice class for exporting the auth logic
export class AuthService {

// Provided by appwrite
 client =new Client();
 account;// variable for client 

 constructor(){
    this.client
    .setEndpoint(conf.appwiteURL)
    .setProject(conf.appwiteProjectID)
    this.account = new Account(this.client)
 }
// for account create 
 async createUserAccount({email,password,name}){
    try {
        // this is the method Provided by the Appwrite.
        const userAccount = await this.account.create(ID.unique(),email,password,name);
        
        
        if(userAccount){
            // call a method
            return this.login({email,password})
        } else{
            return userAccount;
        }
    } catch (error) {
        throw error
    }
 }
// for login 
 async login({email,password}){
    try{
       return await this.account.createEmailSession(email,password)
    }
    catch (error){
        throw error
    }
 }

// for checking whether the user is login or logout
async getCurrnetUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log('Appwite Services :: getCurrentUser :: error, ', error);
    }
    return null;
}

// for Logout 
async logout(){
    try {
       return this.account.deleteSessions() 
    } catch (error) {
        console.log('Apwrite services :: logout :: error',error);
    }
}

}



// authservice object so that user do not need to make the object first
const authService = new AuthService

export default authService 