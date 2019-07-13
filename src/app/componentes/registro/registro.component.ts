import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;


  
  
  

  constructor( private auth: AuthService,
    private router: Router ) { }

  ngOnInit() {
    this.usuario
    this.recordarme
  }

  onSubmit( from: NgForm){
//Validando que el formulario sea correcto y mostrando errores 
    if( from.invalid ){

      return;

    }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'

    });
    Swal.showLoading();
    this.auth.registrerUser(this.usuario)
        .subscribe( resp =>{
          Swal.close();
          //Guardando el nombre en el localStorage

//Funcionamento del recuerdame, el cual esta guardando el correo del usuario
          if(this.recordarme){
            localStorage.setItem('email', this.usuario.email)
            localStorage.setItem('nombre', this.usuario.nombre)
            localStorage.setItem('apellido', this.usuario.apellido)

          }
          localStorage.setItem('apellido', this.usuario.nombre)
          localStorage.setItem('apellido', this.usuario.apellido)

          this.router.navigateByUrl('/login')

        }, (error) =>{
          console.log(error.error.error.message)
          Swal.fire({
            type: 'error',
            title: 'Error al autenticar',
            text: error.error.error.message
          })
        })
  }

}
