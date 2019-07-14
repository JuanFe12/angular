import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioModel } from '../../../models/usuario.model';
import { FileItem } from '../../../models/file-item';



//TODO: Colocar buscardor global para usuarios regisitrados en la palataforma.
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  archivos:FileItem[] = []
  usuario: UsuarioModel = new UsuarioModel()
  nombre: any = "";
  apellido: any = ""

  constructor( private auth: AuthService,
    private router: Router) { }
//Obteniendo el nombre del usuario y motrandolo en el menu
  ngOnInit() {
    this.usuario.nombre = localStorage.getItem('nombre');
    this.usuario.apellido = localStorage.getItem('apellido');

  }
//Que cuando salga lo redirecione hacia el login
  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  buscar(termino: string){
  }




}
