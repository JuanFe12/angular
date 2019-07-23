import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.sass']
})
export class BusquedaComponent implements OnInit {

 
  constructor( 
    public activeRoute: ActivatedRoute,
    public http: HttpClient
              ) { 

activeRoute.params.subscribe(params=>{
  let buscarTexto = params['buscarTexto']
  this.buscar(buscarTexto);
  
})
  }

  ngOnInit() {


}

buscar(buscarTexto: string){
  let url = '/busqueda/' + buscarTexto
  this.http.get(url)
  .subscribe(resp =>{
    console.log(resp);
    
  })
}
}
