import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';



import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private usuarios = 'users';
   private database = 'https://personal-48424.firebaseio.com'
   private url  = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
   private apikey = 'AIzaSyADJMAMCwHPaQRDiKkiohbDzAPbeB8Sk7s';
   userToken : string;
   nombre: string;
  //Crear nuevos usuarios
  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]


  //login
  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
   }
//TODO: destruir la imagen para que no se muestre cuando otro usuario diferente ingrese.
  logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido');

  }
//TODO:Cuando el usuario se logee recontruir la url de la imagen y mostarla en la foto de perfil.
  login( usuario: UsuarioModel ){

    const authData = {
//Llamndo el model usuario
      ...usuario,
      returnSecureToken: true
    };
  // Haciendo la peticion http y guardando el token del usuario
    return this.http.post(
      `${ this.url}/verifyPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map( resp =>{

        this.guardartoken(resp['idToken'])
        return resp
      })
    );



  }

  registrerUser( usuario: UsuarioModel){


  const authData = {

    ...usuario,
    returnSecureToken: true
  };


  return this.http.post(
    `${ this.url}/signupNewUser?key=${this.apikey}`,
    authData
  ).pipe(
    map( resp =>{
      
      this.guardartoken(resp['idToken'])
      return resp
    })
  );




  }
//Enviando el token por el localstorage
  private guardartoken(idToken: string){
    localStorage.setItem('token', idToken);



  }
//Obteniendo el token guardado
  leerToken(){

    if(localStorage.getItem('token')){

      this.userToken = localStorage.getItem('token')
      this.nombre = localStorage.getItem('nombre')

    }else{
      this.userToken = '';
      this.nombre = '';
    }

    return this.userToken;
  }


}


