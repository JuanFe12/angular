import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  nombre: any= ""
  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;
 //TODO: Guardar la url de la imagen en el localStorage
  constructor (private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
//Obtenemos los datos guardados del usuario registrado y lo guardamos en el localstorage
    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email')
      this.usuario.nombre = localStorage.getItem('nombre');
      this.usuario.apellido = localStorage.getItem('apellido');

      this.recordarme = true;
    }
  }

  login( from: NgForm){

//Validamos que el formulario sea valido y si no lo es le mostramos el error
    if( from.invalid ){return;} 

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'

    });
    Swal.showLoading();
    localStorage.removeItem('nombre');

    this.auth.login(this.usuario)
    .subscribe( resp =>{
      Swal.close();
//Ponemos el funcionamento del boton recuerdame, el cual guarda en el localstorage el correo del usuario y el nombre 
      if(this.recordarme){
        localStorage.setItem('email', this.usuario.email)
        localStorage.setItem('nombre', this.usuario.nombre)
        localStorage.setItem('apellido', this.usuario.apellido)

      }else{
        localStorage.removeItem('email')

      }
//Cuando se logee guarde al nombre en el localstorage enviado desde el registro, para mostrarlo en el inicio
      if(this.login){
        this.usuario.nombre = localStorage.getItem('nombre');
        this.usuario.apellido = localStorage.getItem('apellido');
      }

      this.router.navigateByUrl('/inicio')
    },(error)=>{
      console.log()
      Swal.fire({
        type: 'error',
        title: 'Error al autenticar',
        text: error.error.error.message
      })
    })
  }
 
  }
