import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';

export default class AuthService { 
    constructor(clientId, domain) {
        this.lock = new Auth0Lock(clientId,domain,{
            auth:{
                redirectUrl: 'http://localhost:3000/login',
                responseType: 'token'
            }
        });

        this.lock.on('authenticated', this._doAuthentication.bind(this));
        this.login = this.login.bind(this);
    }

    _doAuthentication(authResult) {
        // Saves the user token
        this.setToken(authResult.idToken)
        // navigate to the home route
        browserHistory.replace('/home')
    }

    login() { 
        this.lock.show();
    }

    loggedIn() {
        return !!this.getToken();
    }

    setToken(idToken){
        location.setItem('id_token', idToken);
    }

    getToken(){
        return localStorage.getItem('id_token');
    }

    logout() {
        localStorage.removeItem('id_token');
    }
    
}