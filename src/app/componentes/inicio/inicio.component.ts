import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';



declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {
  main: any = "";
  nombre: any = "";
  apellido: any = ""
  array_mains : any = []
  index: any =""
 
  constructor() { }
 
   ngOnInit() {
     //Obtenemos el nombre que el usuario ingreso en el registro y lo obtenemos del localstorage
    this.nombre = localStorage.getItem('nombre');

    
   }
 //TODO: Guardar el array en una base de datos
   guardar(){

    //Agregamos un array y lo ordenamos al revez.
     this.array_mains.push(this.main);
     this.array_mains.reverse(this.array_mains)


 
     console.log(this.array_mains)
 
   }
 
   eliminar(item){

  //Eliminamos el array 
      for (var i = this.array_mains.length; i--;) {

          if (this.array_mains[i] === item) {

              this.array_mains.splice(i, 1);
              
          }
      }
  
    //El -1 indica que no ha encontrado el elemento

    }
   
  //TODO: Organizar el editar, para que la publicacion pueda eliminar.
   editar(){

    //Editamos el array añadido
    for (var i = 0; i < this.array_mains.length; i++) {
      this.array_mains[i] 
    
    }
  }

  //Otras maneras de editar la publicacion
    /*
    let index = this.array_mains.indexOf(this.array_mains);
    let articulos = [];
 
    if (index > -1) {

       this.array_mains.splice(articulos.push())
       articulos.push(this.main)

    
    */
     //let items = this.array_mains


  
  
 
  }
